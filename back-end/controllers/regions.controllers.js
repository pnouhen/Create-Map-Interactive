const Regions = require("../models/regions.model")

exports.getRegions = (req, res) => {
    Regions.find()
    .then((regions) => res.status(200).json(regions))
    .catch((error)=> res.status(400).json({error}))
}