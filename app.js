const fs = require('fs');
const Datastore = require('nedb');
const db = new Datastore({ filename: 'test.db' });
db.loadDatabase();

for(let i = 0; i < 100; i++) {
    db.insert({ number: i });
}

db.find({}, (err, docs) => {
    if(err) console.log(err);
    console.log(docs);
});