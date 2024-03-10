const path = require("path");

const express = require("express");

const admindata = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
//this for register template engine
app.set("view engine", "hbs");
app.set("views", "views");

//this for parse request in middleware with 3rd part library
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"))); //this for add file static (asset images, and css)

//this for register admin in routes folder and Fitering Path in "/admin" will auto add ("/admin/add-product") for access route(exports.routes)
app.use("/admin", admindata.routes);
//this for register shop in routes folder
app.use(shopRoutes);

//this for 404 page not found
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
