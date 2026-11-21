// backend/controllers/userController.js

// Example: GET all users
const getUsers = (req, res) => {
  res.status(200).json({ message: "List of users will appear here" });
};

// Example: CREATE a new user
const createUser = (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: `User ${name} created with email ${email}` });
};

// Example: GET a single user by ID
const getUserById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Details of user with ID ${id}` });
};

module.exports = { getUsers, createUser, getUserById };