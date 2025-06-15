import React, { useEffect, useState } from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import {useDispatch} from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";
import {createtodofunction , gettodofunction} from "./services/operations/todoApi"
import RenderTask from "./components/renderTask"

const App = () => {

  const dispatch = useDispatch();

  const [newTask , setNewTask] = useState("");
  const [description,setDescription] = useState("");
  const [allTask , setAllTask] =useState([]);
  const length = allTask.length();


  useEffect(()=>{
    const response = dispatch(gettodofunction());
    if(!response){
      toast.error("Todo didn't retrived correctly");
    }
    setAllTask(response);
  },[])

  const handleTaskAdding=(e)=>{
    e.preventDefault();
    if(!description || !newTask){
        toast.error("complete All the fields");
    }
    dispatch(createtodofunction(newTask , description));
  }


  return (
    <div className='flex justify-center pt-10 gap-4'>
      <div>
        <h1 className='font-semibold text-black font-serif pb-5'>Your TO-DO</h1>
      </div>
      <div>
        <input id='addtodo'
         type="text"
         placeholder='Add new Task'
         onChange={(e)=>{setNewTask(e.target.value)}}
         className='border-b-2 text-black'
         />

        <button onClick={handleTaskAdding}>
          <FaRegSquarePlus />
        </button>
      </div>

      <div>
        {allTask.map((task) => (
          <RenderTask task={task}/>
        ))}
      </div>

      <div>
        <p>`Your Remaining Todos : ${length}`</p>
      </div>

      <div><span>"Doing what you love is thr cornerston of having abundance in your life." - Wayne Dyer</span></div>
    </div>
  )
}

export default App
