const { kafka } = require("./client");
const group = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: group });
  console.log("Connecting Consumer...");

  await consumer.connect();
  console.log("Consumer Connected Sucessfully!!");

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  console.log("Consumer Subscribed to rider-updates Topic");

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `Received Message: { Topic: "${topic}", Partition: ${partition}, Message: `,
        message.value.toString(),
        ` } from Group [${group}]`
      );
    },
  });
}

init();
