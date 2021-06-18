const express = require("express");
const peoples = require("./peoplesRoute");
const pets = require("./petsRoutes");
const services = require("./servicesRoutes");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(peoples);
  app.use(pets);
  app.use(services);
};
