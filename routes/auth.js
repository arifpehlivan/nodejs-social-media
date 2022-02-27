const router=require("express").Router();
const User=require("../models/User");
const bcyrpt=require("bcrypt");

//Register
router.post("/register",async (req,res)=>{
    try {
        const salt=await bcyrpt.genSalt(10);
        const hashedPassword=await bcyrpt.hash(req.body.password, salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        });
        const user=await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        console.log(err)
    }

    // const user=await new User({
    //     username:"Arif",
    //     email:"arif@gmail.com",
    //     password:"1234"
    // });

    // await user.save();
    // res.send("ok");
});

module.exports=router;