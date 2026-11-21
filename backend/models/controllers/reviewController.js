const Review = require("../models/Review");
const Property = require("../models/Property");

// Add Review
exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const propertyId = req.params.id;

    const review = new Review({
      property: propertyId,
      user: req.user.id,
      rating,
      comment,
    });

    await review.save();

    // Recalculate Average Rating
    const reviews = await Review.find({ property: propertyId });

    const avg =
      reviews.reduce((acc, item) => item.rating + acc, 0) /
      reviews.length;

    await Property.findByIdAndUpdate(propertyId, {
      averageRating: avg,
      numReviews: reviews.length,
    });

    res.status(201).json({
      message: "Review Added Successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Reviews for Property
exports.getPropertyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      property: req.params.id,
    }).populate("user", "name email");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};