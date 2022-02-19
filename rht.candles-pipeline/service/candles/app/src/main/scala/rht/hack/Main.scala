package rht.hack

import akka.actor.ActorSystem
import akka.kafka.ProducerSettings
import akka.stream.scaladsl.{Broadcast, Concat, Flow, GraphDSL, Sink, Source, Zip}
import akka.stream.{CompletionStrategy, OverflowStrategy, SinkShape}
import akka.{Done, NotUsed}
import org.apache.kafka.clients.producer.ProducerRecord
import org.apache.kafka.common.serialization.StringSerializer
import rht.common.domain.candles.Candle
import rht.common.domain.candles.common.Figi
import tethys.JsonObjectWriter.lowPriorityWriter
import tethys._
import tethys.derivation.auto.jsonWriterMaterializer
import tethys.jackson._

import scala.concurrent.duration._
/**
  * Program entry point
  *
  * You can create another one temporarily to test your code,
  * but the final entry point must be this one!
  */
object Main extends HackathonApp {

  /**
    * Your "main" function
    *
    * @param args program arguments
    * @return Actor, which will be used to push events to Akka Stream
    */
  override def start(args: List[String]): SourceActor = {
    implicit val system: ActorSystem = ActorSystem()

    val topic = sys.env("topic_server")
    val bootstrapServer = sys.env("bootstrap_server")

    println(topic + " topic")
    println(bootstrapServer + "bootstrapServer")

    //Как использовать KafkaProducer?
    val configProducer = system.settings.config.getConfig("akka.kafka.producer")
    val producer =
      ProducerSettings(configProducer, new StringSerializer, new StringSerializer)
        .withBootstrapServers(bootstrapServer).createKafkaProducer()

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

      val outputHack: SinkShape[Candle] = builder.add(Sink.foreach[Candle](x => producer.send {
        new ProducerRecord[String, String](topic, x.asJson)
      }))


      val broadcast = builder.add(Broadcast[Candle](1))

      broadcast.out(0) ~> outputHack

      SinkShape(broadcast.in)
    }
    source.to(Sink.fromGraph(graph)).run()
  }

}
