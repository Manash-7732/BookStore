const zod = require("zod");

const signupSchema = zod.object({
  fullname: zod.string(),
  email_id: zod.string(),
  password: zod.string(), 
});

module.exports = { signupSchema };
