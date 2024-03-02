const http = require("http");
const express = require("express");

const app = express();

//this for new middleware
app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //this allow request for travel/continue to another middleware or in below
});

app.use((req, res, next) => {
  console.log("in another middleware");
});

const server = http.createServer(app);

server.listen(3000);
