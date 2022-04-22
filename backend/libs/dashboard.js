const db = require("../config/dbs").get();
const collection = db.collection("restaurants");

class Restaurants {
  constructor() {}

  getAllRestaurants({ skip, limit }) {
    return new Promise((resolve, reject) => {
      collection
        .find({})
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .toArray((err, data) => {
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

  searchRestaurant(serachText) {
    const searchName = `/${serachText}/`;
    console.log(searchName, typeof searchName);
    return new Promise((resolve, reject) => {
      collection
        .find({ name: new RegExp(".*" + serachText + ".*") })
        .toArray((err, data) => {
          if (err) {
            reject(new Error(err));
          } else {
            if (!!data) {
              console.log(data.length);

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

  getCusineTypes() {
    console.log("i am here");
    return new Promise((resolve, reject) => {
      collection.distinct("cuisine", (err, data) => {
        console.log(err, data);
        if (err) {
          reject(new Error(err));
        } else {
          console.log(data);
          if (!!data) {
            console.log(data.length);

            if (data.length > 0) {
              resolve(data.slice(1, 20));
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
