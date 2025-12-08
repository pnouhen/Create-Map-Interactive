const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));

// CORS managment
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET"
  );
  next();

  // Routes
  const regionsRoute = require("./routes/regions.routes")
  const departementsRoute = require("./routes/departments.routes")

  // Use Routes
  app.use("/api/regions", regionsRoute)
  app.use("/api/departments", departementsRoute)
});

module.exports = app;
 