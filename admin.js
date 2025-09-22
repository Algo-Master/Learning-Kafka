const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  console.log("Admin trying to connnect...");

  await admin.connect();
  console.log("Admin connection successful!!");

  console.log("Creating Topic [rider-updates]");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created success [rider-updates]");

  console.log("Disconnecting Admin...");
  admin.disconnect();
}

init();
