import {IoMdClose } from "react-icons/io";
import {deletetodofunction , markasdonefunction} from "../services/operations/todoApi"
import {toast} from "react-hot-toast"
import {useDispatch} from "@reduxjs/toolkit";


const RenderTask = ({task}) => {
   const dispatch = useDispatch();
   const id  = task._id;

   const handleCheckBox=()=>{
      if(!id){
         toast.error("Error in retriving the id of the task");
      }
      dispatch(markasdonefunction(id));
   }

   const handledelete=()=>{
      if(!id){
         toast.error("Error in retriving the id of the task");
      }
      dispatch(deletetodofunction(id));
   }

  return (
    <div>
      <input onClick={handleCheckBox} type="checkbox" name="markasdone" value={`${task.markasdone}`}/>

      <div>
         <p>{task.markasdone?
            (<div className='line-through'>${task.title}</div>) :
            (<div> ${task.title}</div>)}
         </p>
      </div>

      <button onClick={handledelete}>
         <IoMdClose />
      </button>
    </div>
  )
}

export default RenderTask
