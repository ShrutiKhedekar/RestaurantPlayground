const db = require("../config/dbs").get();
const collection = db.collection("restaurants");

class Restaurants {
  constructor() {}

  getAllRestaurants() {
    return new Promise((resolve, reject) => {
      collection.find({}).toArray((err, data) => {
        if (err) {
          reject(new Error(err));
        } else {
          if (!!data) {
            if (data.length > 0) {
              resolve(data);
            } else {
              resolve("No restaurants Found");
            }
          } else {
            reject(new Error("Something went wrong!!"));
          }
        }
      });
    });
  }
}

module.exports = new Restaurants();
