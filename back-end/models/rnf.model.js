const mongoose = require("mongoose");

const geometrySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [[[[Number]]]],
    required: true,
  },
});

const propertiesSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const rnfSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  geometry: geometrySchema,
  geometry_name: {
    type: String,
    required: true,
  },
  properties: propertiesSchema,
  bbox: {
    type: [Number],
    required: true,
    validate: v => v.length === 4,
  },
});

module.exports = mongoose.model("Rnf", rnfSchema);
