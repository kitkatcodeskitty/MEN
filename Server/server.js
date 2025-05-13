const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.status(200).send("welcome to first mern page")
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running in : ${PORT}`)
})


app.get("/register",(req,res)=>{
    res.status(200).send("this is register")
})

app.get("/home",(req,res)=>{
    res.status(200).send("this is home");
})