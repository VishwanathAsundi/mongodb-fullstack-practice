const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://vishwanath:vish@cluster0.6lk21.mongodb.net/shopnew?retryWrites=true&w=majority";

let _db;

const initDb = callBack => {
  if (_db) {
    return callBack(null, _db);
  }
  MongoClient.connect(uri)
    .then(client => {
      _db = client;
      callBack(null, _db);
    })
    .catch(e => {
      callBack(e, _db);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    initDb((error, db) => {
      if (!error) {
        return db;
      }
    });
  }
};
module.exports = {
  initDb,
  getDb
};
