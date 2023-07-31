const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userDataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    phoneNo: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
