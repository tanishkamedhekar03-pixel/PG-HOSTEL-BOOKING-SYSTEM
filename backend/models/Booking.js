const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  date: String,

  status: {
    type: String,
    default: "Pending"
  },

  paymentStatus: {
    type: String,
    default: "Unpaid"
  }
});

module.exports = mongoose.model("Booking", bookingSchema);