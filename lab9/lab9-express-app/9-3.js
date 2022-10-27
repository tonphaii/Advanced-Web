const expressFunction = require("express");
const mongoose = require("mongoose");
var expressApp = expressFunction();

const url = "mongodb://localhost:27017/university";
const config = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

expressApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Method",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Option, Authorization"
  );
  return next();
});

expressApp.use(expressFunction.json());

expressApp.use((req, res, next) => {
  mongoose
    .connect(url, config)
    .then(() => {
      console.log("Connected to MongoDB...");
      next();
    })
    .catch((err) => {
      console.log("Cannot connect to MongoDB");
      res.status(501).send("Cannot connect to MongoDB");
    });
});

expressApp.use("/user", require("./routes/user"));
expressApp.use("/login", require("./routes/signin"));
expressApp.use("/api", require("./api/product"));

expressApp.listen(3000, function () {
  console.log("Listening on port 3000");
});