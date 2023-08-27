import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoute from "./routes/productRoute.js";

connectDB();

const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoute);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
