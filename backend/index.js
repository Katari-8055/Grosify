import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";



//app config-------------------------------------------------
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB Connection
connectDB();

//API end Point
app.use("/api/food", foodRouter);
app.use("/image", express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get('/', (req, res) => {
  res.send('Backend is running');
});


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
