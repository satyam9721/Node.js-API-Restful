 //working on Node.js-api
    
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello From other side");
})

//output display on the webpage


app.post("/students",(req,res)=>{
    res.send("Hello sexy Satyam");
})

app.listen(port,()=>{
    console.log(`Connected to this ${port}`)
})
//to run the app Node.js-api\Restfulapi> node src/app.js


//add this dependencies in package.json to run app fast
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
