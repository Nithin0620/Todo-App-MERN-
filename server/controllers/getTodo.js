const Todo = require("../models/Todo")

exports.getTodo = async(req,res)=>{
   try{
      const allTodos = await Todo.find({});

      res.status(200).json({
         success:true,
         message:"Todos retrived Successfully",
         data : allTodos,
      });
   }
   catch(e){
      console.log("Internal Server Error",e.message);
      res.status(500).json({
         success:false,
         message:"Internal Server Error",
         data:null,
      })
   }  
}


exports.getTodoById = async(req,res)=>{

   try{
      const id= req.params.id;

      const todo= await Todo.find({_id:id});

      if(!todo){
         res.status(404).json({
            success: false,
            message:"Data not found",
            data:null,
         })
      }

      res.status(200).json({
         success:true,
         message:"Data Retrived successfully",
         data:todo,
      })
   }
   catch(e){
      res.status(500).json({
         success:false,
         message:"Internal Server Error ",
         data:null,
      })
   }
}