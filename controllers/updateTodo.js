const Todo = require("../models/Todo")

exports.updateTodo = async(req,res)=>{
   try{
      const id = req.params.id;

      const{title,description}= req.body;

      const result = await Todo.findByIdAndUpdate({_id:id},
                                                {title,description,updatedAt:Date.now()}
      )
      
      res.status(200).json({
         success:true,
         data:result,
         message:"Db Updated Successfully",
      })
                                                   
   }
   catch(e){
      console.log("Error occured during Updating the DB",e.message);
      res.status(500).json({
         success:false,
         message:"Internal Server Error",
         data:null
      })
   }
}