import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kataricoder:katari@cluster0.cjku855.mongodb.net/grosify').then(() => console.log("DB Connected"))
}