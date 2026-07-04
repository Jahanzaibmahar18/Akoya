import React from "react";
import { BoltIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
const Washed = () => {
  const native = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-20 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-3 text-center">
        How Would You Like It Washed?
      </h1>
      <p className="text tracking-widest text-yellow-700  font-semibold mb-14">
        CHOOSE YOUR EXPERIENCE
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full  mb-16">
        
        <div className="bg-[#f6e4db] rounded-3xl p-10 shadow-md h-70 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-6">
            <div className="w-12 h-12 bg-pink-300 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🧼</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">
            Standard Wash
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our signature 48-hour service with gentle cleaning,
            eco-friendly detergents, and basic folding.
          </p>

          <p className="text-yellow-600 font-semibold">
            From 50 QAR
          </p>
        </div>

        <div className="bg-[#f6e4db] rounded-3xl p-10 shadow-md h-70 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-6">
            <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center">
              <BoltIcon className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">
            Express Wash
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Need it fast? Get 24-hour turnaround, priority
            processing, and premium care.
          </p>

          <p className="text-yellow-600 font-semibold">
            From 80 QAR
          </p>
        </div>
      </div>

      <button  onClick={() => native ("/services")} className="bg-yellow-700 opacity-90 hover:opacity-100 
transition-all duration-400 hover:scale-105 text-black font-semibold px-10 py-4 rounded-full shadow-md ">
        Continue to Garment Selection
      </button>
    </div>
  );
};

export default Washed;
