import Router from "express";
import User from "../models/User.js";
const router = Router();
import {verifyTokenAndAuthorization,verifyTokenAndAdmin} from "../verifyToken.js"
//update user
router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.SECT_KEY).toString()
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//delete user
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted..")
    }catch(err){
        res.status(500).json(err);
    }
})
//get a user
router.get("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})
//get all users
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    const query= req.query.new;
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5): await User.find();
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err);
    }
})


router.get("/find/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
