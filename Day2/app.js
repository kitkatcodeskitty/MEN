const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url=='/Profile'){
        console.log(req.url);
        res.end('This is profile page'); 

    }
    if(req.url=='/'){
        res.end("This is Home Page");
        console.log(req.url);
    }
    if(req.url=='/about'){
        res.end("This is about Page");
        console.log(req.url);
    }
})
server.listen(5000);