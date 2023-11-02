import stripe from "stripe";

const stripe = stripe(process.env.STRIPE_KEY);
import { Router } from "express";
const router = Router();
router.post("/payment",(req,res)=>{
    stripe.charges.create(
        {
            source:req.body.tokenId,
            amount:req.body.amount,
            currency:"usd",
        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else{
                res.status(200).json(stripeRes)
            }
        }
    );
})

export default router;