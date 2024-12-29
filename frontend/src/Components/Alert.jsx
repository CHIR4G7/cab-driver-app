import React from 'react'

const Alert = ({type,message,onClose}) => {

    const alertStyles = {
        success: "bg-green-100 text-green-800 border-green-500",
        error: "bg-red-100 text-red-800 border-red-500",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
        info: "bg-blue-100 text-blue-800 border-blue-500",
      };

      
  return (
    <div
    className={`w-4/5 flex items-center justify-between border-2 p-2 mt-4 rounded ${alertStyles[type]} rounded-md`}
  >
    <span>{message}</span>
    <button
      onClick={onClose}
      className="text-lg font-bold px-2 text-gray-800 hover:text-gray-600"
    >
      &times;
    </button>
  </div>
  )
}

export default Alert
