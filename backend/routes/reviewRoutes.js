const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// ADD REVIEW
router.post("/add", async (req, res) => {

try {

const review = new Review(req.body);
await review.save();

res.json(review);

} catch (err) {

res.status(500).json({error:err.message});

}

});

// GET REVIEWS BY PG
router.get("/:pgId", async (req, res) => {

try {

const reviews = await Review.find({ pgId: req.params.pgId });

res.json(reviews);

} catch (err) {

res.status(500).json({error:err.message});

}

});

module.exports = router;