const express = require('express');
const router = express.Router();
const controller = require("./controllers/controller")


router.get("/", controller.renderHomePAge)

router.post("/", controller.getWeather)

router.get("/about", controller.renderHomePAge)

module.exports = router;