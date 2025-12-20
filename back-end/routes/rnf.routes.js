const express = require("express")
const router = express.Router()

const RnfCtrl = require("../controllers/rnf.controllers")

router.get("/", RnfCtrl.getRnf)

module.exports = router