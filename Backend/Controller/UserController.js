const UserAuth = require("../Model/UserAuth");
const bcryptjs =require("bcryptjs");
const { signupSchema } = require("../ZOD/zod");
const Signup = async function (req, res) {

  const validationResult = signupSchema.safeParse(req.body);
  
  if (!validationResult.success) {
    return res.status(400).json({
      message: "Validation failedi",
      errors: validationResult.error.errors,
    });
  }

  const fullname = validationResult.data.fullname;
  const email_id = validationResult.data.email_id;
  const password = validationResult.data.password;
  const hashPassword =await bcryptjs.hash(password,10);
  try {

    const existingUser = await UserAuth.findOne({ email_id });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }


    const createdUser = new UserAuth({
      fullname:fullname,
      email_id:email_id,
      password:hashPassword,
    });
    await createdUser.save();

    
    res.status(201).json({ message: "User created successfully",createdUser });
  } catch (error) {
    
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const Login = async function (req, res) {
  
    const validationResult = signupSchema.pick({ email_id: true, password: true }).safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResult.error.errors,
      });
    }
  
    const { email_id, password } = validationResult.data;
  
    try {
      
      const user = await UserAuth.findOne({ email_id });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect password" });
      }
  

      res.status(200).json({
        message: "Login successful!",
        user: {
          _id: user._id,
          email_id: user.email_id,
        },
      });
    } catch (error) {
   
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  module.exports = {
    Signup,
    Login,
  };