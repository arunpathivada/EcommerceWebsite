import { Router } from "express";
import User from "../models/User.js";
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken";
const router = Router();

router.post("/register",async(req,res)=>{
    const newUser= new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECT_KEY).toString()
    });
    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

 router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username});
        {!user && res.status(401).json("Wrong Credentials!")}
        const hashedPassword= CryptoJS.AES.decrypt(user.password,process.env.SECT_KEY)
        const Opassword= hashedPassword.toString(CryptoJS.enc.Utf8);
        const accessToken = jwt.sign({
            id:user._id,isAdmin:user.isAdmin
        },process.env.JWT_SEC,{expiresIn:"3d"});
        {Opassword !== req.body.password && res.status(401).json("Wrong Credentials!")}
        const {password,...others}=user._doc;
        res.status(200).json({...others,accessToken})
    }catch(err){
        res.status(500).json(err);
    }
})

export default router;