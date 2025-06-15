import { IoMdClose } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { deletetodofunction, markasdonefunction, gettodofunction } from "../services/operations/todoApi";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import ShowDescriptionmodal from "./ShowDescriptionmodal";
import ShowEditModal from "./ShowEditModal";

const RenderTask = ({ task, setAllTask }) => {

   
  const id = task._id;
  const [showDescription,setShowDescription] = useState(false);
  const [edit,setEdit] = useState(false);

  const handleCheckBox = async () => {
    if (!id) {
      toast.error("Error retrieving task ID");
      return;
    }

    await markasdonefunction(id, !task.done); // send the inverse to update properly
    const updatedTodos = await gettodofunction();
    setAllTask(updatedTodos);

  };

  const handledelete = async () => {
    if (!id) {
      toast.error("Error retrieving task ID");
      return;
    }

    await deletetodofunction(id);
    const updatedTodos = await gettodofunction();
    setAllTask(updatedTodos);
  };

  return (
    <div className="flex items-center justify-between bg-white border rounded-xl px-4 py-2 shadow-sm">
      <Toaster/>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="markasdone"
          checked={task.done}
          onChange={handleCheckBox}
          className="w-5 h-5 accent-gray-800 cursor-pointer"
        />

        <div className={`text-gray-800 ${task.done ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </div>
      </div>

      <div className="flex gap-2">
         <button className="font-semibold text-slate-700 hover:text-slate-900 underline" onClick={()=>{setShowDescription(!showDescription)}}>
            Description
         </button>
        <button
          onClick={() =>(setEdit(true))}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FiEdit2 size={18} />
        </button>

        <button
          onClick={handledelete}
          className="text-red-600 hover:text-red-800 transition"
        >
          <IoMdClose size={20} />
        </button>
      </div>
      {showDescription && <ShowDescriptionmodal title={task.title} description={task.description} setShowDescription={setShowDescription}/>}
      {edit && <ShowEditModal id={task._id} title={task.title} description={task.description} setEdit={setEdit} setAllTask={setAllTask}/>}
    </div>
    
  );
};

export default RenderTask;
