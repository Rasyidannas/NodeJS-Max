const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

//this for parse request in middleware with 3rd part library
app.use(bodyParser.urlencoded({ extended: false }));

//this for register admin in routes folder
app.use(adminRoutes);
//this for register shop in routes folder
app.use(shopRoutes);

app.listen(3000);
