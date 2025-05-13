// npm i ejs 
// npm i morgan
// app.set("view engine",'ejs')

const express = require('express');
const morgan = require('morgan')
const app=express();

app.set('view engine', 'ejs');
app.use(morgan('dev'))


app.use((req,res,next)=>{
    console.log("Hiya");
    return next();
})

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/about',(req,res)=>{
    res.send('About page');
})





app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send("Gotcha");
})

app.listen(4000)