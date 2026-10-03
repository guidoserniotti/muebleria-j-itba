const express = require("express");
const router = express.Router();
const productos = require("../data/productos.js");

router.get("/", (req, res) => {
  res.json(productos);
});

module.exports = router;
