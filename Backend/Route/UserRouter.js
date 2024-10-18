const express=require("express");
const UserController = require("../Controller/UserController");

const router=express.Router();

router.post("/",UserController.Signup);
router.post("/login",UserController.Login);
module.exports = router;