const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("users", UserScheme);
