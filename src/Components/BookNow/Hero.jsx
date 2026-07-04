import React, { useState } from "react";
import { FaTshirt, FaStar, FaSuitcase, FaReceipt ,FaPage4 } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Washing & Ironing",
    desc: "Complete washing with ironing",
    icon: <FaTshirt size={28} />,
    price: 50,
  },
  {
    id: 2,
    title: "Washing, Ironing & Perfume",
    desc: "Complete washing with ironing and perfume services",
    icon: <FaStar size={28} />,
    price: 75,
  },
 
 {
    id: 3,
    title: "Dry Clean",
    desc: "Professional dry cleaning",
    icon: <FaSuitcase size={28} />,
    price: 100,
  },
  
];

const Hero = () => {
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <div className="h-screen bg-linear-to-br from-[#3b2a12] to-[#7a5a2c] py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden mt-10">

          {/* Header */}
          <div className="bg-linear-to-r from-[#3b2a12] to-[#7a5a2c] text-white p-6 ">
            <div className="h-2 bg-yellow-500 rounded-full w-1/6 mb-4"></div>
            <h2 className="text-xl font-semibold text-center">
              AKOYA PREMIUM LAUNDRY
            </h2>
            <p className="text-center text-sm mt-1">Step {step} of 6</p>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-lg font-medium mb-6">
              Choose Service Type:
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} onClick={() => setSelected(service)} className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 shadow-sm
 ${selected?.id === service.id ? "border-yellow-500 bg-yellow-50 scale-105" : "hover:scale-105"}`}>
                  <div className="text-green-500 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <div className="flex justify-end mt-10">
              <button
                disabled={!selected}
                onClick={() => setStep(step + 1)}
                className={`px-6 py-2 rounded-lg font-medium transition
                ${selected ? "bg-gray-800 text-white hover:bg-black" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`} > Next
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl p-6 h-fit mt-10">
          <div className="flex items-center gap-2 mb-6">
            <FaReceipt />
            <h3 className="font-semibold text-lg text-yellow-600">
              Order Summary
            </h3>
          </div>

          <div className="border-t border-b py-6 text-gray-400 text-sm">
            {selected ? (
              <div>
                <p className="font-medium text-gray-700">
                  {selected.title}
                </p>
                <p className="mt-2">
                  {selected.price} QAR
                </p>
              </div>
            ) : (
              "No service selected"
            )}
          </div>

          {/* Coupon */}
          <div className="mt-6 flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="border rounded-lg px-3 py-2 w-full text-sm"
            />
            <button className="bg-yellow-500 text-white px-4 rounded-lg text-sm">
              Apply
            </button>
          </div>

          {/* Final Price */}
          <div className="flex justify-between mt-6 font-semibold text-lg">
            <span>Final Price</span>
            <span className="text-yellow-600">
              {selected ? selected.price : 0} QAR
            </span>
          </div>
        </div>

      </div>
    </div>

  );

};


export default Hero;