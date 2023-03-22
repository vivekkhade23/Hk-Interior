require('dotenv').config();
const express = require("express");
const userModel = require("../model/User.model");
const userRouter = express.Router();
const jwt = require("jsonwebtoken")
const { SECRETKEY } = process.env;
console.log(process.env)

userRouter.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body
        let u = await userModel.findOne({ email, password })
        console.log(u)
        if (u) {
            return res.status(200).send("User already exists")
        }
        else {

            let newUser = new userModel({ name: name, email: email, password: password, role: "user" })
            newUser = await newUser.save()
            return res.status(200).send("User created successfully")
        }

    } catch (e) {
        return res.send(e)

    }
})

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        let u = await userModel.findOne({ email, password })

        if (u.email === email && u.password === password) {
            console.log("sdfbg,djvjybfksd",SECRETKEY,process.env.SECRETKEY)
            const token = jwt.sign({email:email}, process.env.SECRETKEY)
            console.log("tokenisdcbghc",token)
            return res.send(token)
        }
        else {
            return res.status(200).send("User is not present")
        }

    } catch (e) {
        return res.send(e)

    }
})




module.exports = userRouter;