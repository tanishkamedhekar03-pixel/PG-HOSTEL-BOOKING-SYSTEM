const express=require("express");

const router=express.Router();
const bcrypt = require("bcrypt");
const User=require("../models/User");


router.post("/register", async (req,res)=>{

const {name,email,password} = req.body;

// hash password
const hashedPassword = await bcrypt.hash(password,10);

const user = new User({
name:name,
email:email,
password:hashedPassword
});

await user.save();

res.json({success:true});

});
router.post("/login", async (req,res)=>{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.json({success:false,message:"User not found"});
}

// compare password
const isMatch = await bcrypt.compare(password,user.password);

if(isMatch){

res.json({success:true,user});

}else{

res.json({success:false,message:"Wrong password"});

}

});
module.exports=router;