const { MongoClient } = require('mongodb');

const url = "mongodb://localhost:12312/";

const client = new MongoClient(url);


// Database Name
const dbTest = 'test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbTest);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return console.log('done.');
}

main();