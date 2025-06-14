const Todo =  require("../models/Todo")

exports.markAsDone = async(req,res)=>{

   try{
      const id = req.params.id;
      const {done} = req.body;

         const result = await Todo.findByIdAndUpdate(
            { _id: id },
            { done: done },  
            { new: true }
         );
      res.status(200).json({
         success:true,
         message:"marked as done successfully",
         data:result
      })
   }
   catch(e){
      console.log("Error occured during marking as done",e.message);
      res.status(500).json({
         success:false,
         message:"Internal server error",
         data:null
      })
   }
   
}