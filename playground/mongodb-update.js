// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    debugger;
    db.collection('Todos').findOneAndUpdate({

        _id: new ObjectId("5bbb221106c7b1004bcd8cee")
    }, {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: true
        }).then((res) => {
            console.log(res);
        });

    // db.close();
});