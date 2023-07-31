const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expDetailSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
      trim: true,
    },
    cardType: {
      type: String,
      required: true,
      trim: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
    },
    necessity: {
      type: String,
      required: true,
      trim: true,
    },
    userID: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

const ExpDetail = mongoose.model("ExpDetail", expDetailSchema);

module.exports = ExpDetail;
