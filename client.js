const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "experiment-app",
  brokers: ["localhost:9092"],
});
