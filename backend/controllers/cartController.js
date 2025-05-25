import userModel from "../models/userModel.js";

//add item to user cart

export const addToCart = async (req, res) => {

    try {
        const userData = await userModel.findById(req.userId);
        
        if (!userData) {
            console.log("user not found")
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const cartData = await userData.cartData;
        
        if (!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData})
        res.json({success:true,message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove items from usercart

export const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.userId);
        const cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true,message:"Removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}


//Fetch User Cart

export const getCart = async (req, res) => {
    
    try {
        const userData = await userModel.findById(req.userId);
        const cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

