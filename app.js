const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//this for parse request in middleware with 3rd part library
app.use(bodyParser.urlencoded({ extended: false }));

//this middleware only for /add-product url
app.use("/add-product", (req, res, next) => {
  //   console.log("in another middleware");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /> <button type="submit">Add Product</button></form>'
  );
});

//this will only available for post and not get/put/patch/delete
app.post("/product", (req, res) => {
  console.log(req.body); //this will be output because body-parser
  res.redirect("/");
});

//this middleware only for / or all with /
app.use("/", (req, res, next) => {
  //   console.log("in another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
