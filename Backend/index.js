const express = require('express');
const env = require("dotenv");
const mongoose = require("mongoose");
const info= require("./Model/info")
const Book = require("./Model/info");
const BookRouter= require("./Route/BookRouter")
const UserRoute = require("./Route/UserRouter");
const cors=require("cors");

env.config();

const port = process.env.PORT || 3001;
const URI = process.env.MONGODBURI;
const app = express();


app.use(cors());
app.use(express.json());

const connectToDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB is connected");
    } catch (error) {
        console.error("Error occurred while connecting to MongoDB:", error); // Use console.error for errors
    }
};

connectToDB();

app.use("/Book",BookRouter);
app.use("/signup",UserRoute);

app.get("/", (req, res) => {
    res.send("Manash Raj");
});

app.listen(port, () => {
    console.log(`Process is running on port ${port}`);
});
