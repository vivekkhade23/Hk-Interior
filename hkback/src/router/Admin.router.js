const express=require("express");
const adminRouter=express.Router();


adminRouter.get("/",async(req,res)=>{
    try {
    return res.send("im on")
    } catch (e) {
        return res.send(e)

    }
})


module.exports=adminRouter;