import React from 'react'
import { IoMdClose } from "react-icons/io";
import { toast } from "react-hot-toast";

const ShowDescriptionModal = ({ title, description, setShowDescription }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md transition-transform duration-300 mv">
        <button
          onClick={() => setShowDescription(false)}
          className="absolute top-2 right-2 text-red-600  hover:text-red-700 mb-2 p-2"
        >
          <IoMdClose size={24} />
        </button>

        <div className='flex gap-4'>
         <h1 className='font-semibold'>
            Title:
         </h1>
         <h2 className="text-xl font-bold text-gray-800 mb-2 break-words bg-slate-50 border-solid border-2 border-slate-100 rounded-lg">

          {title}
        </h2>
        </div>

        <div className='flex gap-4'>
         <h1 className='font-semibold'>
            Description:
         </h1>
         <p className="text-gray-700 text-sm break-words whitespace-pre-wrap  bg-slate-50 border-solid border-slate-100 border-2 rounded-lg">
          {description}
        </p>
        </div>
      </div>
    </div>
  );
};

export default ShowDescriptionModal;
