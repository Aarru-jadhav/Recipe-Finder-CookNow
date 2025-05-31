
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, time, image,id }) => {
  return (
   <div className="card border-2 border-gray-300 rounded-xl p-4 shadow-md w-64 hover:scale-105 transition-transform duration-300">
      <div className="imagecontainer h-40 w-full mb-3 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}

          className="h-full w-full object-cover "
        />
      </div>
      <h1 className="text-xl font-semibold mb-1">{title}</h1>
      <p className="text-sm text-gray-600 mb-1">⏱️ {time}</p>
      <p className="text-sm text-green-600 font-medium mb-3"></p>
      <Link to={`/recipe/${id}`}> 
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-2">
           View Recipe
        </button>
      </Link>


    </div>
  )
}

export default Card    

