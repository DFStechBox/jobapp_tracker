
const { MongoClient } = require("mongodb");

// Option A: If you want it to read from your .env.local file automatically
require("dotenv").config({ path: ".env.local" });
const uri = process.env.MONGODB_URI;

// Option B: Alternatively, paste your connection string directly here for a quick test:
const uri = "mongodb+srv://
quantum1449_db_user:<db_password>@cluster0.pniewcu.mongodb.net/?appName=Cluster0;

async function testConnection() {
  if (!uri) {
    console.error("❌ Error: MONGODB_URI is missing or not defined.");
    return;
  }

  console.log("⏳ Attempting to connect to MongoDB...");
  const client = new MongoClient(uri);

  try {
    // Connect to the cluster
    await client.connect();

    // Ping the database to verify the connection is active
    await client.db("admin").command({ ping: 1 });

    console.log("✅ SUCCESS: Successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ CONNECTION FAILED:");
    console.error(error.message);
  } finally {
    // Ensure the client closes cleanly
    await client.close();
  }
}

testConnection();