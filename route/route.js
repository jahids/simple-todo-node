const { Router } = require("express");
const express = require("express");
const route  = express.Router();

// todo get router
route.get("/", async(req,res)=> {
    res.send("hello");
})

// get a todo by id
route.get("/:id", async(req,res)=> {

})

// post todo
route.post("/", async(req,res)=> {
    

})

// post all todo
route.post("/all", async(req,res)=> {

})

// put totdo update
route.put("/:id", async(req,res)=> {

})

// delete tot 
route.delete("/:id", async(req,res)=> {

})


module.exports = route;