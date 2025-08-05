import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(cors());

import fs from "fs";
import path from "path";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

dotenv.config();

app.use(express.json());

app.use("/v1", taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mongodb connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
  });
});
