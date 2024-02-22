const mongoose = require("mongoose");
const express = require("express");
const USER = mongoose.model("USER");
const router = express.Router();
const bcrypt = require("bcrypt");

// router.get("/", (req, res) => {
//   res.send("hello");
// });

//for signup

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "Please add all the field" });
  }

  bcrypt.hash(password, 12).then((hashedPassword) => {
    USER.findOne({ email: email }).then((savedUSer) => {
      if (savedUSer) {
        return res
          .status(422)
          .json({ error: "User already exist with this email" });
      }

      const user = new USER({
        name,
        email,
        password: hashedPassword,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "Registered successfully" });
        })
        .catch((err) => console.log("err"));
    });
  });
});


//for signin

router.post('/signin', (req,res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({error:"Please enter email and password"})
    }

    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email"})
        }
        bcrypt.compare(password, savedUser.password)
        .then((match)=>{
            if(match){
                return res.status(200).json({message:"Succefully signed in"})
            }else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err=>console.log(err));
    })
})

module.exports = router;
