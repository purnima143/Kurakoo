// main server file

require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const mongoose = require("mongoose");
const express = require('express');
const app = express();

const root = require('./routes/root');

// logger
app.use(morgan('dev'));

// compressing api response
app.use(compression());

// security config
app.use(helmet());

// cors enable
app.options('*', cors());
app.use(cors({ origin: 'http://localhost:5000' }));

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// database connection
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(()=>{
    console.log("database connected");
});

// all the api routes
app.use('/api', root);

// port initialized
const PORT = process.env.PORT || 5000;

// server setup
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
// //environment variable
// require("dotenv").config();
//
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
//
// const root = require("./routes/root");
// // const api = require("./routes/api");
// // const notFound= require("./routes/notFound");
// // const logger
//
//
// app.use(bodyParser.urlencoded({ extended: true }));
//
// mongoose.connect(process.env.MONGO_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }
// ).then(()=>{
//     console.log("database connected");
// });
//
// app.use(cors());
// app.use(express.json());
// // app.use(logger);
// app.get("/", (req, res) => console.log('hello'));//modify later according to apis
// // app.use("/api", api);
// // app.use("*", notFound);
//
// // port initialized
// const PORT = process.env.PORT || 3000;
//
// app.listen(process.env.PORT, ()=> {
//     console.log(`Our Server is started at ${PORT}`);
// });