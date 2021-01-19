// main server file

import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import root from "./routes/root";
import api from "./routes/api";
import notFound from "./routes/notFound";

import logger from "./middleware/logger";

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const DBName = `ExampleApiDB`;
mongoose.connect(`mongodb://localhost:27017/${DBName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use(logger);

app.use("/", root);

app.use("/api", api);

app.use("*", notFound);

app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));
