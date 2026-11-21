const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const { name, phone, date } = req.body;

    if (!name || !phone || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    const booking = new Booking({
      name,
      phone,
      date,
      status: "Pending"
    });

    await booking.save();

    res.json({
      success: true,
      message: "Booking Saved"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});

// GET ALL BOOKINGS
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ success: false });
  }
});
router.delete("/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.json({ message: "Booking Deleted" });
});

// UPDATE STATUS (Admin)
router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    await Booking.findByIdAndUpdate(req.params.id, { status });

    res.json({ message: `Booking ${status}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;