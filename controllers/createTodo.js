const Todo = require("../models/Todo")

exports.createTodo=async (req,res)=>{
   try{
      const {title,description} = req.body;

      const response = await Todo.create({title,description});
      res.status(200).json({
         success:true,
         message:"Successfully entry created in Database",
         data : response,
      })
   }
   catch(e){
      console.log("error occured",e.message);
      res.status(500).json({
         success:false,
         message:e.message,
         data:"internal server error occured"
      })
   }
}