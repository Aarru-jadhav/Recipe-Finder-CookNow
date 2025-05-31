import React from 'react'

const Herosection = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden pt-5">
      <img
        src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="w-full h-full object-cover border-2 rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-20 md:mt-28">
          Let’s Cook Something Extraordinary
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mt-3 md:mt-5">
          “Explore recipes tailored to your mood, cravings, and time.”
        </p>
      </div>
    </div>
  );
}

export default Herosection

