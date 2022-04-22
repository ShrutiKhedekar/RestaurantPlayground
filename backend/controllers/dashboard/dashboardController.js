"use strict";

const dashboard = require("../../libs/dashboard");
const dishes = require("../../data/dish");

class dashboardController {
  constructor(router) {
    router.get(
      "/allRestaurants",
      this.authenticatethisUser,
      this.getRestaurants.bind(this)
    );
    router.get(
      "/cuisines",
      this.authenticatethisUser,
      this.getCuisines.bind(this)
    );

    router.get(
      "/restaurantDetails/:id",
      this.authenticatethisUser,
      this.getRestaurantDetails.bind(this)
    );

    router.get(
      "/restaurantSearch/:searchText",
      this.authenticatethisUser,
      this.searchRestaurant.bind(this)
    );
    router.get(
      "/restaurantCuisines/:cuisine",
      this.authenticatethisUser,
      this.getRServingCuisine.bind(this)
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
      let data = await dashboard.getAllRestaurants(req.query);
      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: data,
      });
    } catch (err) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        err: err,
      });
    }
  }

  async getRestaurantDetails(req, res) {
    console.log(req.params);
    res.status(200).json({
      responseCode: 200,
      responseDesc: "success",
      data: dishes,
    });
  }

  async searchRestaurant(req, res) {
    console.log(req.params.searchText);
    try {
      let restaurantInfo = await dashboard.searchRestaurant(
        req.params.searchText
      );
      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: restaurantInfo,
      });
    } catch (err) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        err: err,
      });
    }
  }

  async searchRestaurant(req, res) {
    try {
      let restaurantInfo = await dashboard.searchRestaurant(
        req.params.searchText
      );
      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: restaurantInfo,
      });
    } catch (err) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        err: err,
      });
    }
  }

  async getCuisines(req, res) {
    try {
      let cuisines = await dashboard.getCusineTypes();

      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: cuisines,
      });
    } catch (err) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        err: err,
      });
    }
  }

  async getRServingCuisine(req, res) {
    try {
      let restaurantInfo = await dashboard.searchCuisine(req.params.cuisine);
      res.status(200).json({
        responseCode: 200,
        responseDesc: "success",
        data: restaurantInfo,
      });
    } catch (err) {
      res.status(204).json({
        responseCode: 204,
        responseDesc: "success",
        err: err,
      });
    }
  }
}
module.exports = dashboardController;
