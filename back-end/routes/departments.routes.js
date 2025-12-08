const express = require("express");
const router = express.Router();

const DepartementsCtrl = require("../controllers/departments.controllers");

router.get("/", DepartementsCtrl.getDepartements);

module.exports = router;
