const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Scer:XsIz1VNCo3xlQ4ST@datacluster.rikqwrg.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

//https://www.mongodb.com/docs/atlas/tutorial/insert-data-into-your-cluster/
//adding code to access the data fromt the database

//this is the name of the atlas DB
const dbName = "Dataset";

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    //connect to the collection Stations
    const coll = db.collection("test");
    const cursor = coll.find();

    // Print to the console
    await cursor.forEach(console.log);
    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
