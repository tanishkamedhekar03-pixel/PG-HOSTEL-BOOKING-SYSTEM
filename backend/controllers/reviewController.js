// backend/controllers/reviewController.js

// Example: GET all reviews
const getReviews = (req, res) => {
  res.status(200).json({ message: "List of reviews will appear here" });
};

// Example: CREATE a new review
const createReview = (req, res) => {
  const { userId, reviewText } = req.body;
  res.status(201).json({ message: `Review by user ${userId}: ${reviewText} created` });
};

// Example: GET a single review by ID
const getReviewById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Details of review with ID ${id}` });
};

module.exports = { getReviews, createReview, getReviewById };