// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({ text: 'Launch' }).then((res) => {
    //     console.log(res);
    // });
    // db.collection('Todos').deleteOne({ text: 'Launch' }).then((res) => {
    //     console.log(res);
    // });
    db.collection('Todos').findOneAndDelete({ text: 'Lauch' }).then((res) => {
        console.log(res);
    });

    // db.close();
});