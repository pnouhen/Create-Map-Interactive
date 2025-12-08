const Departements = require("../models/departments.model")

exports.getDepartements = (req, res) => {
    Departements.find()
    .then((departements) => res.status(200).json(departements))
    .catch((error)=> res.status(400).json({error}))
}