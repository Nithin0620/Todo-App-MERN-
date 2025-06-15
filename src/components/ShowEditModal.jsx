import React, { useState } from "react";
import { updatetodofunction ,gettodofunction} from "../services/operations/todoApi";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";


const ShowEditModal = ({ id, title, description, setEdit, setAllTask }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleUpdateButton = async () => {
    if (!newTitle || !newDescription) {
      toast.error("All fields are required for updating");
      return;
    }

    const response = await updatetodofunction(id, newTitle, newDescription);
    console.log("updation response",response);
    if (response?.data?.success) {
      setEdit(false);
      const finallist = await gettodofunction()
      setAllTask(finallist); // update the todo list
      toast.success("Todo updated successfully");
    } else {
      toast.error("Update failed");
    }
  };

  return (
    <div  className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          onClick={() => setEdit(false)}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Edit Task</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleUpdateButton}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Update Changes
        </button>
      </div>
    </div>
  );
};

export default ShowEditModal;
