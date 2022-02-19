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


object KafkaProducerApp {
  implicit val formats = DefaultFormats
//  val log = Logger.getLogger("KafkaProducerApp")
//
//  val brokers = "localhost:9092"
//  val topic = "records"
//
//  private val properties = {
//    val properties = new Properties()
//
//    properties.put(BOOTSTRAP_SERVERS_CONFIG, brokers)
//    properties.put(ACKS_CONFIG, "all")
//    properties.put(RETRIES_CONFIG, 0)
//    properties.put(KEY_SERIALIZER_CLASS_CONFIG, classOf[LongSerializer])
//    properties.put(VALUE_SERIALIZER_CLASS_CONFIG, classOf[StringSerializer])
//
//    properties
//  }
//
//  val producer = new KafkaProducer[Long, String](properties)
//
//  var key = 0L
//  val shoppingList = "Water.Sweet.Bread.Meat.Groats.Fish.Vegetables".split("\\.").toList
//
//  while (true) {
//    val timestamp = Instant.now.toEpochMilli
//    key += 1
//
//    val currentShoppingList = Random.shuffle(shoppingList).take(Random.nextInt(3) + 1)
//    val sum = (Random.nextInt(90) + 10) * currentShoppingList.size
//    val id = Random.nextInt(9999)
//
//    val value: String = write(Customer(id, sum, currentShoppingList))
//    val record = new ProducerRecord(topic, null, timestamp, key, value)
//
//    producer.send(record)
//
//    log.info(s"$record")
//
//    TimeUnit.SECONDS.sleep(Random.nextInt(3) + 1)
//  }

}

// https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html
object SparkApp extends App {
  implicit val formats = DefaultFormats
  val schemaCandle = ScalaReflection.schemaFor[Candle].dataType.asInstanceOf[StructType]
  val schemaCandleDetails = ScalaReflection.schemaFor[CandleDetails].dataType.asInstanceOf[StructType]

  val topic = sys.env.getOrElse("topic_server", "scalaToJava")//todo: test sbt candles/reStart
  val brokers = sys.env.getOrElse("bootstrap_server", "localhost:9092")

  private val properties = {
    val properties = new Properties()
    properties.put(BOOTSTRAP_SERVERS_CONFIG, brokers)
    properties.put(ACKS_CONFIG, "all")
    properties.put(RETRIES_CONFIG, 0)
    properties.put(KEY_SERIALIZER_CLASS_CONFIG, classOf[LongSerializer])
    properties.put(VALUE_SERIALIZER_CLASS_CONFIG, classOf[StringSerializer])
    properties
  }

  val producer = new KafkaProducer[Long, String](properties)

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
    .toJSON
    .writeStream
    .outputMode("update")
    .trigger(ProcessingTime("5 seconds"))
    .format("kafka")
    .option("kafka.bootstrap.servers", brokers)
    .option("topic", topic)
    .option("checkpointLocation", "./tmpCheckpoint")
    .start()



  query.awaitTermination()
}