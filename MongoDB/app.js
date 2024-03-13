const { MongoClient } = require('mongodb');

//nodemongo is database name
//var url = "mongodb://127.0.0.1:27017/nodemongo";
const client = new MongoClient('mongodb://localhost:27017/nodemongo');

// connect to the db
client.connect()
    .then(() => {
        // console.log("Database  connected and created!");
        // client.close();
        var dbo = client.db('nodemongo');
        dbo.createCollection('customers').then(function(){
            console.log("Collection created");
            client.close();
        })
    })
    .catch(error => console.log('Failed to Connect', error))
