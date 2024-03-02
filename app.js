const express = require("express");

const app = express();

//this middleware only for / or all with /
app.use("/", (req, res, next) => {
  console.log("this middleware always running");
  next(); //this will continue to another/below middleware
});

//this middleware only for /add-product url
app.use("/add-product", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>The 'Add Product' Page</h1>");
});

//this middleware only for / or all with /
app.use("/", (req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
