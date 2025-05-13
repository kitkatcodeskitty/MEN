const express  = require("express");
const router = express.Router();

router.get("/register",(req,res)=>{
    res.
    status(200)
    .send("this is register from router ");
})


module.exports = router;