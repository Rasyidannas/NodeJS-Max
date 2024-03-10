const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

//this middleware only for / or all with "/"
router.get("/", (req, res, next) => {
  // console.log("shop.js", adminData.products);
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  }); //second argument for send data to shop.pug file
});

module.exports = router;
