const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema({

name: {
type: String,
required: true
},

city: {
type: String,
required: true
},

location: {
type: String,
required: true
},

description: {
type: String
},

type: {
type: String,
enum: ["PG","Hostel"],
default: "PG"
},

gender: {
type: String,
enum: ["Boys","Girls","Unisex"],
default: "Unisex"
},

price: {
type: Number,
required: true
},

rating: {
type: Number,
default: 0
},

image: {
type: String
},

amenities: [{
type: String
}],

createdAt: {
type: Date,
default: Date.now
}

});

module.exports = mongoose.model("PG", pgSchema);
