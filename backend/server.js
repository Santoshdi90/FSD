import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// connect database
connectDB();

app.get("/", (req, res) => res.send("API is running..."));

// import your routes
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import replyRoutes from "./routes/replyRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/replies", replyRoutes);

app.listen(process.env.PORT || 5001, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 5001}`)
);
