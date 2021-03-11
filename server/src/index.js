/// main server file
const app = require("express");
const env = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const root = require("./routes/root");
const api = require("./routes/api");
const notFound= require("./routes/notFound");
const logger = require("./routes/loger");

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