import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }, // changed from String to Number
    image: { type: String, required: true }, // changed 'Image' to 'image'
    category: { type: String, required: true }
});

const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;
