// require("dotenv").config({ path: "./config.env" });
// const path = require('path');
// const express = require("express");
// const connectDB = require("./config/db");
// const postRoutes = require("./routes/postRoutes");

// connectDB();

// const app = express();

// app.use(express.json());

// app.use("/api/v1/posts", postRoutes);

// if(process.env.NOE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, '/client/build')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//     })
// }else {
//     app.get('/', (req, res)=>{ 
//         res.send("API");
//     })
// }
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const connectDB = require('./config/db');
// var cors = require('cors');
// const path = require("path");
// require("dotenv").config({ path: "./config.env" });



// // routes
// const books = require('./routes/api/books');

// const app = express();

// // Connect Database
// connectDB();







// // cors
// app.use(cors({ origin: true, credentials: true }));

// // Init Middleware
// app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('Hello world!'));

// // use Routes
// app.use('/api/books', books);

// const port = process.env.PORT;

// app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require("path");
require("dotenv").config({ path: "./config.env" });



// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.resolve(__dirname, "./client/build")));

  // cors
  app.use(cors({ origin: true, credentials: true }));

  // Init Middleware
  app.use(express.json({ extended: false }));

  app.get('/', (req, res) => res.send('Hello world!'));

  // use Routes
  app.use('/api/books', books);

  const port = process.env.PORT || 8082;

}else{
  res.send('API running');
}


app.listen(port, () => console.log(`Server running on port ${port}`));
