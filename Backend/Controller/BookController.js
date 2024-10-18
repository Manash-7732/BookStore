const Book = require("../Model/info"); 

const GetBooks = async function(req, res) { 
    try {
        const books = await Book.find(); 
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ 
            message: "An error occurred while fetching books", 
            error: error.message 
        });
    }
}

module.exports = GetBooks; 