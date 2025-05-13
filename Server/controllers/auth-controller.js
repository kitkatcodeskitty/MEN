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
        console.log(req.body);
        res.status(200).json({message: req.body});
    }catch(error){
        res.status(505).send("Error");
    }
}


module.exports = {home,register};