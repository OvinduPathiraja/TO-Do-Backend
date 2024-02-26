import express from "express";
import dotenv from "dotenv";

import mongoose from "mongoose";
import bodyParser from "body-parser";
import TaskRoute from "./routes/TaskRoute.js";
import HealthRoute from "./routes/HealthRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import cookieParser from "cookie-parser";
import { Sequelize } from "sequelize";
import cors from "cors";

dotenv.config();

import Db from "./models/db.js";

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors());

Db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

app.use("/api/v1/health", HealthRoute);
app.use("/api/v1/tasks", TaskRoute);
app.use("/api/v1/auth", AuthRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
}
);
