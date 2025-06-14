const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res)=>{
   try{
      const id = req.params.id;
      const response = await Todo.findByIdAndDelete(id);

      res.status(200).json({
         success:true,
         message:"Todo deleted successfully from the DB",
         data : response,
      })
   }
   catch(e){
      console.log("Error occured while Deleting from DB",e.message);
      res.status(500).json({
         success:false,
         message:"Error occured in the backend",
         data:null
      })
   }
}