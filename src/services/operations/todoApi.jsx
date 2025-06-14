import {toast} from react-hot-toast;
import { apiConnector } from "../ApiConnector";
import {todoapis} from "../Apis";

const {createtodo , deletetodo} = todoapis;

export function createtodofunction (newTask , description){
   return async()=>{
      const toastID = toast.loading("Loading...");
      try{
         if(!newTask || !description){
            throw new Error("All fields are required");
         }

         const response = await apiConnector("POST" , createtodo ,{
            newTask,
            description
         })

         if(!response?.data?.success){
            throw new Error(response?.data?.success || "Create ToDO failed");
         }

         toast.success("Todo created Successfully");
      }
      catch(e){
         console.log(e.message,"Error occured while intracting with the DB");

      }
      finally{
         toast.dismiss(toastID);
      }
   }
}

export function deletetodofunction (id){
   return async()=>{
      const toastID = toast.loading("Loading...");
      try{
         if(!id){
            throw new error("Id is required to delete the task");
         }
         const response = apiConnector("DELETE" , deletetodo);

         if(!response?.data?.success){
            throw new Error("Error occured in intracting with the db");
         }

         toast.success("Task deleted Successfully");
      }
      catch(e){
         console.log(e.message,"Error occured in intracting with the db")
      }
      finally{
         toast.dismiss(toastID);
      }
   }
}



