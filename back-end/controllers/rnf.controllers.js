const Rnf = require("../models/rnf.model");

exports.getRnf = (req, res) => {
  Rnf.find()
    .then((rnf) => res.status(200).json(rnf))
    .catch((error) => res.status(400).json(error));
};
