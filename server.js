require("dotenv").config({ path: "./config.env" });
const path = require('path');
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();

const app = express();

app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/client/build')));

    // routes
    const books = require('./routes/api/books');

    // Connect Database
    connectDB();

    // cors
    app.use(cors({ origin: true, credentials: true }));

    // Init Middleware
    app.use(express.json({ extended: false }));

    app.get('/', (req, res) => res.send('Hello world!'));

    // use Routes
    app.use('/api/books', books);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}else {
    app.get('/', (req, res)=>{ 
        res.send("API");
    })
}
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


