import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}

var corsOptions = {
    // origin: "http://localhost:3000",
    origin: process.env.REMOTE_CLIENT_APP,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  };
  
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get("/",(rec,res)=>{res.json('salam')})

app.listen(PORT, ()=> console.log(`server started on port: ${PORT}`));