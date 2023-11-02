import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"
import cartRoute from "./routes/cart.js"
import orderRoute from "./routes/order.js"
import cors from "cors";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
//mongoose connection
mongoose.connect(
    process.env.MONGO_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(()=>{
    console.log("mongoDB connected")
  }).catch((err)=>{
    console.log(err)
  })

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

app.use("/api/products",productRoute);
app.use("/api/orders",orderRoute);

app.use("/api/cart",cartRoute);



app.listen(5000,()=>{
    console.log("server running at post 5000.")
})
