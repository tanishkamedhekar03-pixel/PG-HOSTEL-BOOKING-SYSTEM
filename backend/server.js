
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

const pgRoutes = require("./routes/pgRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());

app.use("/api/pgs", pgRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);


// ================= CONNECT DATABASE =================

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected ✅"))
.catch(err=>console.log(err));


// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`Server running on http://localhost:${PORT}`);
});