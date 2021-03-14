// main server file

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

//routes
const authRoutes = require("./routes/auth");

// logger
app.use(morgan("dev"));

// compressing api response
app.use(compression());

// security config
app.use(helmet());

// cors enable
app.options("*", cors());
app.use(cors({ origin: "http://localhost:5000" }));

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@kurakoo.4ebj8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("database connected");
  });

// all the api routes
app.use("/api", authRoutes);

// port initialized
const PORT = process.env.PORT || 5000;

// server setup
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});