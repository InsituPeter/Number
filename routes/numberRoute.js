const express = require("express");
const { getNumberProperties } = require("../controller");

const router = express.Router();

//
router.get("/", getNumberProperties);

module.exports = router;