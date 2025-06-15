import {toast} from "react-hot-toast";
import { apiConnector } from "../ApiConnector";
import {todoapis} from "../Apis";

const {createtodo , deletetodo ,gettodo ,updatetodo ,markasdone , gettodobyid} = todoapis;

export async function  createtodofunction (newTask , description){
   
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

export async function deletetodofunction (id){
      const toastID = toast.loading("Loading...");
      try{
         if(!id){
            throw new Error("Id is required to delete the task");
         }
         const response = await apiConnector("DELETE" , `${deletetodo}/${id}`);

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


export async function gettodofunction(){
      const toastID = toast.loading("Loading...");
      try{
         const response = await apiConnector("GET",gettodo);

         if(!response?.data?.success){
            throw new Error("Error occured in intracting with the db in get todo call");
         }
         console.log(response);
         return response.data.data;
         
      }
      catch(e){
         console.log("Error occured in intracting with the db",e)
      }
      toast.dismiss(toastID);
}

export async function updatetodofunction(id , title,description){
      const toastID = toast.loading("LOADING...");
      try{
         if(!id){
            throw new Error("ID of the Task is required to update the task");
         }
         if(!title || !description){
            throw new Error("updated title and description of the Task is required to update the task");
         }
         const response = await apiConnector("PUT" , `${updatetodo}/${id}`,{title,description});
         if(!response?.data?.success){
            throw new Error("Error occured in intracting with the db");
         }

         toast.success("Task Updated Successfully");

      }
      catch(e){
         console.log(e.message,"Error occured in intracting with the db")
      }
      toast.dismiss(toastID);
}

export async function gettodobyidfunction(id){
      const toastID = toast.loading("Loading...");
      try{
         if(!id){
            throw new Error("ID of the Task is required to retirive the task");
         }
         const response = await apiConnector("GET", `${gettodobyid}/${id}`);
         if(!response?.data?.success){
            throw new Error("Error occured in intracting with the db");
         }

         toast.success("Task retrived  Successfully");
         return response.data;


      }
      catch(e){
         console.log(e.message,"Error occured in intracting with the db")
      }
      toast.dismiss(toastID);

}

export async function markasdonefunction(id){
      const toastID = toast.loading("Loading...");
      try{
         if(!id){
            throw new Error("ID of the Task is required to mark the task done");
         }
         const response = await apiConnector("PUT", `${markasdone}/${id}`);
         if(!response?.data?.success){
            throw new Error("Error occured in intracting with the db");
         }

         toast.success("Task marked as Done Successfully");

      }
      catch(e){
         console.log(e.message,"Error occured in intracting with the db")
      }
      toast.dismiss(toastID);
}
