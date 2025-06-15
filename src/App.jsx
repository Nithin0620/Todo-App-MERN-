import React, { useEffect, useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
// import {useDispatch} from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import {
  createtodofunction,
  gettodofunction,
} from "./services/operations/todoApi";
import RenderTask from "./components/renderTask";

const App = () => {
  // const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);
  const length = allTask.length;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await gettodofunction();
        if (!response) {
          toast.error("Todo didn't retrieve correctly");
        } else {
          setAllTask(response); // response should be an array
        }
      } catch (err) {
        toast.error("Error while fetching todos");
        console.error(err);
      }
    };

    fetchTodos();
  }, []);

  const handleTaskAdding = async (e) => {
    e.preventDefault();

    if (!description || !title) {
      toast.error("Complete all the fields");
      return;
    }

    await createtodofunction(title, description);

    // ✅ Fetch updated tasks
    const updatedTodos = await gettodofunction();
    setAllTask(updatedTodos);

    setTitle("");
    setDescription("");
  };

  return (
    // App.jsx
    <div className="flex flex-col items-center pt-10 px-4 w-full min-h-screen bg-gray-50">
      <Toaster />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your To Do</h1>

      <div className="flex gap-2 mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Add new task"
          className="flex-1 border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add your description"
          className="flex-1 border-b-2 border-gray-400 bg-transparent text-gray-800 placeholder-gray-500 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleTaskAdding}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          <FaRegSquarePlus />
        </button>
      </div>

      <div className="space-y-4 w-full max-w-md">
        {allTask.map((task) => (
          <RenderTask key={task._id} task={task} setAllTask={setAllTask} />
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-700 font-semibold italic">
        Your remaining todos : {length}
      </div>

      <div className="mt-2 text-xs text-gray-500 italic max-w-sm text-center">
        "Doing what you love is the cornerstone of having abundance in your
        life." - Wayne Dyer
      </div>
    </div>
  );
};

export default App;
