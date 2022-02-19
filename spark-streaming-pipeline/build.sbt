import sbtassembly.AssemblyPlugin.autoImport.assemblyMergeStrategy

name := "spark-streaming-pipeline"

version := "0.1"

scalaVersion := "2.13.7"

idePackagePrefix := Some("com.example.spark_streaming_hw")

val sparkVersion = "3.2.0"
val scalaJsonVersion = "4.0.4"


val consoleMain = Some("SparkApp")

lazy val spark_app = project
  .enablePlugins(AssemblyPlugin)
  .settings(
    mainClass in (Compile, run) := consoleMain,
    mainClass in assembly := consoleMain,
    libraryDependencies ++= Seq(
      "org.apache.spark" %% "spark-core" % sparkVersion,
      "org.apache.spark" %% "spark-sql" % sparkVersion,
      "org.apache.spark" %% "spark-streaming" % sparkVersion,
      "org.apache.spark" %% "spark-sql-kafka-0-10" % sparkVersion,
      "org.apache.kafka" % "kafka-clients" % "2.8.0",
    ),
    assemblyMergeStrategy in assembly := {
      case PathList("META-INF", xs @ _*) => MergeStrategy.discard
      case x => MergeStrategy.first
    }
  )



lazy val root = (project in file("."))
  .aggregate(spark_app)
  .settings(
    assemblyMergeStrategy in assembly := {
      case PathList("META-INF", xs @ _*) => MergeStrategy.discard
      case x => MergeStrategy.first
    }
  )
