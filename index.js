import express from "express";
import mongoose from "mongoose";

import "dotenv/config";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
const port = 8000;


// Middleware
app.use(cors());
app.use(express.json());
app.use('/donghua', route);

// Connect Database MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log("Terhubung ke Database"))
  .catch(e => console.log(e));

// Port Listening
app.listen(port, () => console.log("Listening at port 8000"));
