const express = require("express");
const router = express.Router();
const PG = require("../models/PG");

// ================= GET ALL PGs =================
router.get("/", async (req, res) => {
  try {
    const pgs = await PG.find();
    res.json(pgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= GET PG BY CITY =================
router.get("/city/:city", async (req, res) => {
  try {
    const pgs = await PG.find({ city: req.params.city });
    res.json(pgs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= GET SINGLE PG =================
router.get("/:id", async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);
    res.json(pg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= ADD NEW PG =================
router.post("/add", async (req, res) => {
  try {
    const newPG = new PG(req.body);
    const savedPG = await newPG.save();
    res.json(savedPG);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= UPDATE PG =================
router.put("/:id", async (req, res) => {
  try {
    const updatedPG = await PG.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPG);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ================= DELETE PG =================
router.delete("/:id", async (req, res) => {
  try {
    await PG.findByIdAndDelete(req.params.id);
    res.json({ message: "PG deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;