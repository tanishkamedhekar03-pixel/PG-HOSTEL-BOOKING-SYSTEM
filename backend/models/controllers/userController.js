// backend/controllers/userController.js

// Dummy register function
const registerUser = (req, res) => {
    res.send("User registered ✅");
};

// Dummy login function
const loginUser = (req, res) => {
    res.send("User logged in ✅");
};

module.exports = { registerUser, loginUser };