const home = async(req,res) =>{
    try{
    res
    .status(200)
    .send("this is home  from router ");
    }catch(error){
    console.log(error)
    }
}


const register = (req,res) =>{
    try{
        res.status(400).send("Welcome to register page");
    }catch(error){
        res.status(505).send("Error");
    }
}


module.exports = {home,register};