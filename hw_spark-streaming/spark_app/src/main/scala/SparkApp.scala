import org.apache.kafka.clients.producer.ProducerConfig._
import org.apache.kafka.common.serialization.{LongSerializer, StringSerializer}
import org.apache.spark.sql.catalyst.ScalaReflection
import org.apache.spark.sql.functions.{avg, col, from_json}
import org.apache.spark.sql.streaming.Trigger.ProcessingTime
import org.apache.spark.sql.types.{StringType, StructType}
import org.apache.spark.sql.{Column, DataFrame, SparkSession}
import org.json4s.DefaultFormats
import org.apache.spark.sql.functions.{avg, max, col, min, from_json}


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


  val brokers = "localhost:9092"
  val topic = "scalaToJava"


  private val properties = {
    val properties = new Properties()
    properties.put(BOOTSTRAP_SERVERS_CONFIG, brokers)
    properties.put(ACKS_CONFIG, "all")
    properties.put(RETRIES_CONFIG, 0)
    properties.put(KEY_SERIALIZER_CLASS_CONFIG, classOf[LongSerializer])
    properties.put(VALUE_SERIALIZER_CLASS_CONFIG, classOf[StringSerializer])
    properties
  }

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

  val query = records
    .withColumn("CandleDetails", from_json(col("value").cast(StringType), schemaCandle).getField("details"))
    .withColumn("low", (col("CandleDetails").cast(schemaCandleDetails)).getField("low"))
    .withColumn("high", (col("CandleDetails").cast(schemaCandleDetails)).getField("high"))
    .select(
      max("high").as("Max CandleDetails high"),
      min("low").as("Min CandleDetails low")
    )
    .writeStream
    .outputMode("update")
    .trigger(ProcessingTime("10 seconds"))
    .format("console")
    .start()


  query.awaitTermination()
}