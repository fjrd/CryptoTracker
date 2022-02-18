package rht.hack

import akka.{Done, NotUsed}
import akka.actor.ActorSystem
import akka.stream.{CompletionStrategy, OverflowStrategy, SinkShape}
import akka.stream.scaladsl.{Broadcast, Flow, GraphDSL, Sink, Source, ZipWith}
import akka.kafka.ProducerSettings
import org.apache.kafka.clients.producer.ProducerRecord
import org.apache.kafka.common.serialization.StringSerializer
import rht.common.domain.candles.Candle
import rht.common.domain.candles.common.Figi
import rht.kafka.producer.KafkaProducer

/**
  * Program entry point
  *
  * You can create another one temporarily to test your code,
  * but the final entry point must be this one!
  */
object Main extends HackathonApp {

  final case class Data(figi: Figi, max: BigDecimal, min: BigDecimal, avg: BigDecimal, timestamp: Long)

  /**
    * Your "main" function
    *
    * @param args program arguments
    * @return Actor, which will be used to push events to Akka Stream
    */
  override def start(args: List[String]): SourceActor = {
    implicit val system: ActorSystem = ActorSystem()

    val configProducer = system.settings.config.getConfig("akka.kafka.producer")
    val producer =
      ProducerSettings(configProducer, new StringSerializer, new StringSerializer)
        .withBootstrapServers("localhost:9092").createKafkaProducer()

    def packaging(max: BigDecimal, min: BigDecimal, avg: BigDecimal, figi: Figi): Data =
      Data(figi, max, min, avg, System.currentTimeMillis())

    val source = Source.actorRef(
      completionMatcher = {
        case Done =>
          CompletionStrategy.draining
      },
      failureMatcher = PartialFunction.empty,
      bufferSize = 2000,
      overflowStrategy = OverflowStrategy.dropHead
    )
    val graph = GraphDSL.create() { implicit builder: GraphDSL.Builder[NotUsed] =>
      import akka.stream.scaladsl.GraphDSL.Implicits._

      val id = builder.add(Flow[Candle].map(x => x.figi))
      val min = builder.add(Flow[Candle].map(x => x.details.low))
      val max = builder.add(Flow[Candle].map(x => x.details.high))
      val avg = builder.add(Flow[Candle].map(x => (x.details.high - x.details.low) / 2))

      val output = builder.add(Sink.foreach[Data](x => producer.send(
        new ProducerRecord[String, String]("javaToScala", x.toString)
      )))

      val broadcast = builder.add(Broadcast[Candle](4))
      val zip = builder.add(ZipWith[BigDecimal, BigDecimal, BigDecimal, Figi, Data](packaging))
      broadcast.out(0) ~> max ~> zip.in0
      broadcast.out(1) ~> min ~> zip.in1
      broadcast.out(2) ~> avg ~> zip.in2
      broadcast.out(3) ~> id ~> zip.in3
      zip.out ~> output
      SinkShape(broadcast.in)
    }
    source.to(Sink.fromGraph(graph)).run()
  }

}
