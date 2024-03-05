const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

//this for parse request in middleware with 3rd part library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //this for add file static (asset images, and css)

//this for register admin in routes folder and Fitering Path in "/admin" will auto add ("/admin/add-product") for access route in adminRoutes
app.use("/admin", adminRoutes);
//this for register shop in routes folder
app.use(shopRoutes);

//this for 404 page not found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
