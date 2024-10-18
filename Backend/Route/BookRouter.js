const express = require("express");
const  GetBooks  = require("../Controller/BookController"); 
const router = express.Router();


router.get("/", GetBooks); 

module.exports = router; 




