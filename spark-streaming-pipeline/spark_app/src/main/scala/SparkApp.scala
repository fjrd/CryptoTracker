import org.apache.kafka.clients.producer.KafkaProducer
import org.apache.kafka.clients.producer.ProducerConfig._
import org.apache.kafka.common.serialization.{LongSerializer, StringSerializer}
import org.apache.spark.sql.catalyst.ScalaReflection
import org.apache.spark.sql.functions.{avg, col, current_timestamp, from_json, max, min, unix_timestamp}
import org.apache.spark.sql.streaming.Trigger.ProcessingTime
import org.apache.spark.sql.types.{StringType, StructType, TimestampType}
import org.apache.spark.sql.{Column, DataFrame, SparkSession}
import org.json4s.DefaultFormats
import org.apache.spark.sql.streaming.StreamingQuery

import java.time.Instant
import java.util.Properties
import scala.concurrent.duration.FiniteDuration



case class Candle(interval: Int, figi: String, details: CandleDetails)

case class CandleDetails(low: BigDecimal, high: BigDecimal, open: BigDecimal, close: BigDecimal, openTime: Instant)

// https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html
object SparkApp extends App {
  implicit val formats = DefaultFormats
  val schemaCandle = ScalaReflection.schemaFor[Candle].dataType.asInstanceOf[StructType]
  val schemaCandleDetails = ScalaReflection.schemaFor[CandleDetails].dataType.asInstanceOf[StructType]

  val topic = sys.env.getOrElse("topic_server", "scalaToJava")//todo: test sbt candles/reStart
  val topicOut = sys.env.getOrElse("topic_server_out", "topicAggData")//todo: test sbt candles/reStart
  val brokers = sys.env.getOrElse("bootstrap_server", "localhost:9092")


  val spark = SparkSession.builder
    .appName("spark-streaming-hw")
    .master(sys.env.getOrElse("spark.master", "local[*]"))
    .getOrCreate()

  spark.sparkContext.setLogLevel("ERROR")

  val records: DataFrame = spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", brokers)
    .option("subscribe", topic)
    .load()

  val candle = col("CandleDetails").cast(schemaCandleDetails)
  val query: StreamingQuery = records
    .withColumn("Candle", from_json(col("value").cast(StringType), schemaCandle))
    .withColumn("CandleDetails", col("Candle").getField("details"))
    .withColumn("figi", col("Candle").getField("figi"))
    .withColumn("low", candle.getField("low"))
    .withColumn("high", candle.getField("high"))
    .withWatermark("timestamp", "1 minutes")
    .groupBy("figi")
    .agg(
      max("high").as("max"),
      min("low").as("min")
    )
    .withColumn("timestamp", current_timestamp())
    .withColumn("avg", col("max").minus(col("min").divide(2)))
    .toJSON
    .writeStream
    .outputMode("update")
    .trigger(ProcessingTime("60 seconds"))
    .format("kafka")
    .option("kafka.bootstrap.servers", brokers)
    .option("topic", topicOut)
    .option("checkpointLocation", "./tmpCheckpoint")
    .start()



  query.awaitTermination()
}