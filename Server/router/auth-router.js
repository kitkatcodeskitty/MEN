const express  = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.
    status(200)
    .send("this is home  from router ");
})

router.get("/register",((req,res)=>{
    res.status(200).send("this is register page");
}))



module.exports = router;