const express = require("express")
const router = express.Router()

const regionsCtrl = require("../controllers/regions.controllers")

router.get("/", regionsCtrl.getRegions)

module.exports  = router