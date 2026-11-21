const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");


// 👑 Admin: Add Property
router.post(
  "/add",
  authMiddleware,
  roleMiddleware(["admin"]),
  async (req, res) => {
    try {
      const { title, description, price, location, images } = req.body;

      const newProperty = new Property({
  title,
  description,
  price,
  location,
  images,
  createdBy: req.user.id,
});

      await newProperty.save();

      res.status(201).json({
        message: "Property Added Successfully",
        property: newProperty,
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }
);


// 🏠 Tenant & Admin: View All Properties
router.get(
  "/all",
  authMiddleware,
  async (req, res) => {
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }
);


// 👑 Admin: Delete Property
router.delete(
  "/delete/:id",
  authMiddleware,
  roleMiddleware(["admin"]),
  async (req, res) => {
    try {
      await Property.findByIdAndDelete(req.params.id);

      res.json({
        message: "Property Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;