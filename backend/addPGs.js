const mongoose = require("mongoose");
require("dotenv").config();

const PG = require("./models/PG"); // model file

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const pgs = [
  { name:"Sunshine PG", city:"Pune", location:"Wakad", price:8000, type:"PG", gender:"Girls", image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", description:"Clean rooms", amenities:["WiFi","Food"] },
  { name:"Royal Stay", city:"Pune", location:"Hinjewadi", price:9000, type:"PG", gender:"Boys", image:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c", description:"Near IT park", amenities:["WiFi","AC"] },
  { name:"Comfort Nest", city:"Pune", location:"Baner", price:8500, type:"Hostel", gender:"Girls", image:"https://images.unsplash.com/photo-1560448075-bb485b067938", description:"Safe stay", amenities:["WiFi"] },
  { name:"Urban Living", city:"Mumbai", location:"Andheri", price:12000, type:"PG", gender:"Unisex", image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", description:"Premium rooms", amenities:["AC","Food"] },
  { name:"Green View PG", city:"Pune", location:"Kothrud", price:7000, type:"PG", gender:"Girls", image:"https://images.unsplash.com/photo-1618773928121-c32242e63f39", description:"Peaceful area", amenities:["WiFi"] },
  { name:"City Hostel", city:"Mumbai", location:"Dadar", price:9500, type:"Hostel", gender:"Boys", image:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", description:"Affordable stay", amenities:["Food"] },
  { name:"Elite PG", city:"Pune", location:"Viman Nagar", price:11000, type:"PG", gender:"Unisex", image:"https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db", description:"Luxury rooms", amenities:["AC","WiFi"] },
  { name:"Budget Stay", city:"Pune", location:"Hadapsar", price:6000, type:"PG", gender:"Boys", image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5", description:"Cheap rooms", amenities:["Water"] },
  { name:"Skyline PG", city:"Mumbai", location:"Bandra", price:15000, type:"PG", gender:"Girls", image:"https://images.unsplash.com/photo-1560448075-bb485b067938", description:"City view", amenities:["WiFi","AC"] },
  { name:"Happy Homes", city:"Pune", location:"Aundh", price:8500, type:"PG", gender:"Unisex", image:"https://images.unsplash.com/photo-1598928506311-c55ded91a20c", description:"Friendly environment", amenities:["Food","WiFi"] }
];

async function addPGs(){
  await PG.insertMany(pgs);
  console.log("✅ 10 PGs Added Successfully");
  mongoose.disconnect();
}

addPGs();