"use strict";

const dashboard = require("../../libs/dashboard");

class dashboardController {
  constructor(router) {
    router.get(
      "/restaurants",
      this.authenticatethisUser,
      this.getRestaurants.bind(this)
    );
    router.get(
      "/restaurantDetails/:id",
      this.authenticatethisUser,
      this.getRestaurantDetails.bind(this)
    );
  }

  authenticatethisUser(req, res, next) {
    console.log("i am authenticating ");
    next();
  }

  function(err, req, res, next) {
    console.log("error exception");
  }

  async getRestaurants(req, res) {
    try {
      let data = await dashboard.getAllRestaurants();
      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: data,
      });
    } catch (e) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        data: data,
      });
    }
  }

  async getRestaurantDetails(req, res) {}
}
module.exports = dashboardController;
