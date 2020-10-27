const e = require("express");
const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://imgLabeller:1234qwer@cluster0-shard-00-00.wsscn.mongodb.net:27017,cluster0-shard-00-01.wsscn.mongodb.net:27017,cluster0-shard-00-02.wsscn.mongodb.net:27017/admin?ssl=true&replicaSet=atlas-4xxio4-shard-0&authSource=admin&retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    const database = client.db("mytest");
    const collection = database.collection("dogs");
    const res = await collection.insertOne({ name: "wowo", age: 3 });
    console.log("saved");
  } catch (err) {
    console.log("err!");
    console.error(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run();
