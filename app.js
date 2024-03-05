const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

//this for parse request in middleware with 3rd part library
app.use(bodyParser.urlencoded({ extended: false }));

//this for register admin in routes folder and Fitering Path in "/admin" will auto add ("/admin/add-product") for access route in adminRoutes
app.use("/admin", adminRoutes);
//this for register shop in routes folder
app.use(shopRoutes);

//this for 404 page not found
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000);
