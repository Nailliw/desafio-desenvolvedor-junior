const express = require("express");
const cors = require("cors");
const Users = require("./UsersRoute");
const pets = require("./petsRoutes");
const services = require("./servicesRoutes");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(Users);
  app.use(pets);
  app.use(services);
};
