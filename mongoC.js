const { MongoClient } = require("mongodb");

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://bojakhongir:${password}@mern-shinline-deploymen.vvxobrx.mongodb.net/?retryWrites=true&w=majority&appName=MERN-shinline-deployment`; // clustore url

async function connectToDatabase() {
  const client = new MongoClient(connectionString);

  try {
    // Connect to MongoDB server
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the database
    const db = client.db("MERN-shinline-deployment");

    return db;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Rethrow the error to handle it in the calling code
  }
}

module.exports = connectToDatabase();
