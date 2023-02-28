const todomodel = require('../models/todomodel')
const ToDomodel=require('../models/todomodel')
module.exports.getToDo=async(req,res)=>{
    const toDo=await todomodel.find()
    res.send(toDo)
}
module.exports.saveToDo=async(req,res)=>{
    const {text}=req.body
    todomodel.create({text}).then((data)=>{
        console.log("added successfully")
        console.log(data)
        res.send(data)
    })
}
module.exports.updateToDo=async(req,res)=>{
    const {_id,text}=req.body
    todomodel.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("Updated Successfully")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports.deleteToDo=async(req,res)=>{
    const {_id}=req.body
    todomodel.findByIdAndDelete(_id)
    .then(()=>{
        res.send("Deleted Successfully")
    }).catch((err)=>{
        console.log(err)
    })
}