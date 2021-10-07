const express = require('express');
const { epicsController } = require("../controller/epics.controller");
const router = express.Router();

router.get('/labels', epicsController);

module.exports = router;