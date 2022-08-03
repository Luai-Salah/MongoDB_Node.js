const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

Connect();

async function Connect()
{
    const client = new MongoClient(uri);
    
    try
    {
        await client.connect();

        const db = client.db("Sandbox");
        console.log(`Connected to database ${db.databaseName}`);

        const levels = db.collection("Levels");

        const searchCursor = levels.find();
        const result = await searchCursor.toArray();

        console.table(result);
    }
    catch (exeption)
    {
        console.error(`Error: ${exeption}`);
    }
    finally
    {
        client.close();
    }
}
