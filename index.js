
const express = require("express");
const mongoose = require("mongoose");
const todoshandeler = require("./route/route")

 
const app = express();
app.use(express.json());
const PORT = 3009;


// database connection with mongose
// database connnetion asnc vabe kaj koer and promise return kroe
mongoose.connect("mongodb://localhost/todos")
.then(()=>{
    console.log("database connected");
})
.catch((err)=> {
    console.log("datbase not connected", err);
})
//defult error handle
function errorhandle(err, req, res, next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500).json({error: err});
}

//aplication routes


app.use('/todo',  todoshandeler);

app.listen(PORT,()=>{
    console.log(`this server running http:localhost:${PORT}`)
})