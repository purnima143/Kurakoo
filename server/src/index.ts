// main server file
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = require("express");
const env = require("dotenv");

import root from "./routes/root";
import api from "./routes/api";
import notFound from "./routes/notFound";
import logger from "./middleware/logger";

//environment variable
env.config();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.to93b.mongodb.net/${process.env.MONGO_DB_DATA}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(()=>{
        console.log("database connected");
});

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", root);//modify later according to apis 
app.use("/api", api);
app.use("*", notFound);

app.listen(process.env.PORT, ()=> {
    console.log(`Our Server is started at ${process.env.PORT}`);
});