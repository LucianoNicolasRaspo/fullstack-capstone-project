require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        const client = new MongoClient(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await client.connect();
        console.log('Conected MongoDB');

        dbInstance = client.db(dbName);
        return dbInstance;
    } catch (err) {
        console.error('Error at connect MongoDB:', err);
        process.exit(1); 
    }
}

module.exports = connectToDatabase;
