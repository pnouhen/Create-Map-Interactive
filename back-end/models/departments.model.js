const mongoose = require("mongoose");

const geo_point_2dSchema = new mongoose.Schema({
  lon: { type: Number, required: true },
  lat: { type: Number, required: true },
});

const geometrySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [[[[{ type: Number }, { type: Number }]]]],
    required: true,
  },
});

const geo_shapeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  geometry: { geometrySchema },
});

const departementsSchema = new mongoose.Schema({
  geo_point_2d: { geo_point_2dSchema },
  geo_shape: { geo_shapeSchema },
  year: {
    type: String,
    required: true,
  },

  reg_code: {
    type: [String],
    required: true,
  },

  reg_name: {
    type: [String],
    required: true,
  },

  dep_code: {
    type: [String],
    required: true,
  },

  dep_current_code: {
    type: [String],
    required: true,
  },

  dep_name: {
    type: [String],
    required: true,
  },

  dep_name_upper: {
    type: String,
    required: true,
  },

  reg_name_lower: {
    type: String,
    required: true,
  },

  dep_area_code: {
    type: String,
    required: true,
  },

  dep_type: {
    type: String,
    required: true,
  },

  dep_status: {
    type: Boolean,
    required: true,
  },

  dep_siren_code: {
    type: String,
    required: true,
  },

  dep_is_ctu: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Departments", departementsSchema);
