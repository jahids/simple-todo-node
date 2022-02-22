const { Router } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const route  = express.Router();
const todoSchema = require("../Schemas/todoSchema");

// mongoose.model class return kore tay new dite hocie
// first databasename and tarpor kon schema follow korbe
const Todo = new mongoose.model("Todo" , todoSchema)

// todo get router
route.get("/", async(req,res)=> {
    await Todo.find({status : "active"}, (err, data)=> {
        if(err){
            res.status(500).json({
                message : "todo many inserted problem "
            })
        }else{
            res.status(200).json({
                result : data,
                message : "todo Many data  succesfully"
            })
        }
    })
})

// get a todo by id
route.get("/:id", async(req,res)=> {

})

// post todo********** single
route.post("/", async(req,res)=> {
    const newTodo = new Todo(req.body);
    await newTodo.save((err) => {
     if(err){
         res.status(500).json({
             message : "todo was not inserted succesfully"
         })
     }else{
        res.status(200).json({
            message : "todo inserted succesfully"
        })
     }
    });

})

// post all todo maltiple
route.post("/all", async(req,res)=> {
    await Todo.insertMany(req.body, (err)=> {

        if(err){
            res.status(500).json({
                message : "todo many inserted problem "
            })
        }else{
            res.status(200).json({
                message : "todo Many data  succesfully"
            })
        }

})

})



// put totdo update
route.put("/:id", async(req,res)=> {
    await Todo.updateOne({_id : req.params.id},{
        $set : {
            status: 'active'
        }
    }, (err)=>{

        if(err){
            res.status(500).json({
                message : "todo update problem "
            })
        }else{
            res.status(200).json({
                message : "todo updatetd"
            })
        }

    })

})



// delete tot 
route.delete("/:id", async(req,res)=> {

    await Todo.deleteOne({_id : req.params.id},{
        $set : {
            status: 'active'
        }
    }, (err)=>{

        if(err){
            res.status(500).json({
                message : "todo not delete "
            })
        }else{
            res.status(200).json({
                message : "todo was deleted"
            })
        }

    })


})


module.exports = route;