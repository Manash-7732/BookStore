const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema({
    id: Number,
    name: String,      
    title: String,     
    catagory: String,  
    price: String,     
    image: String      
});


const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
