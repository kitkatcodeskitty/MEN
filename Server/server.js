const express = require("express");
const app = express();


app.use(express.json());

const router = require("./router/auth-router.js");

app.use("/api/auth",router);




const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running in : ${PORT}`)
})


