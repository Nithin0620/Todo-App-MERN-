import React from 'react'
import {IoMdClose } from react-icons/io;
import {useDispatch} from react-redux

const RenderTask = (task) => {
   const dispatch = useDispatch();
   
   const handleCheckBox=()=>{

   }

   const handledelete=()=>{

   }

  return (
    <div>
      <input onClick={handleCheckBox()} type="checkbox" name="markasdone" value={`${task.markasdone}`}/>

      <div>
         <p>`${task.markasdone?
            (<div className='line-through'>${task.title}</div>) :
            (<div> ${task.title}</div>)}`
         </p>
      </div>

      <button onClick={handledelete()}>
         <IoMdClose />
      </button>
    </div>
  )
}

export default RenderTask
