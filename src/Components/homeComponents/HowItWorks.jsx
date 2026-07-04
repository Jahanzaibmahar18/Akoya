import React from "react";
import Pickupv from "../../assets/Images/Pickupv.mp4";
import ExpertProcessing from "../../assets/Images/ExpertProcessing.mp4";


const HowItWorks = () => {
  return (
    <section className="bg-[#fbf7f2] py-24">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-20">
          <h2 className="text-4xl font-medium text-gray-800">
            How It Works
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="w-14 h-1 bg-yellow-500"></span>
            <p className="text-sm tracking-[0.25em] text-yellow-600">
              SEAMLESS PICKUP PROCESS
            </p>
            <span className="w-14 h-1 bg-yellow-500"></span>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center mb-28">

          <div className="rounded-2xl overflow-hidden shadow-lg transition duration-500 hover:scale-105">
            <video className="w-full h-70 object-cover " >
              <source src={Pickupv} type="video/mp4" />

            </video>
          </div>

          <div className="relative hidden md:flex justify-center">
            <span className="absolute  top-0 h-300 w-1 bg-yellow-500"></span>
            <span className="relative right-10 z-10 mt-3 w-13 h-13 rounded-full bg-yellow-600 text-white flex items-center justify-center font-semibold">
              1
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4 h-8">
              <span className="text-yellow-500 text-xl">📅</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Schedule Your Pickup
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Book through our app, WhatsApp, or website. We offer flexible
              2-hour pickup windows.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                24/7 booking availability
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                Recurring pickup scheduling available
              </li>
            </ul>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center">

          <div className="bg-white rounded-2xl shadow-lg p-8 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yellow-500 text-xl">🔒</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Professional Collection
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Our uniformed valets arrive in discreet luxury vehicles with
              garment bags.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                Contactless pickup available
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                Digital receipt provided
              </li>
            </ul>
          </div>


          <div className="relative hidden md:flex justify-center order-1 md:order-2">
            <span className="absolute  bg-yellow-500"></span>
            <span className="relative right-155 z-10  mr-5 w-13 h-13 rounded-full bg-yellow-600 text-white flex items-center justify-center font-semibold">
              2
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg order-3 transition duration-500 hover:scale-105">
            <video className="w-full h-70 object-cover" >
              <source src={ExpertProcessing} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center mb-28">

          <div className="rounded-2xl overflow-hidden shadow-lg transition duration-500 hover:scale-105">
            <video className="w-full h-70 object-cover" >
              <source src={Pickupv} type="video/mp4" />

            </video>
          </div>

          <div className="relative hidden md:flex justify-center">
            <span className="absolute  bg-yellow-500"></span>
            <span className="relative right-5 z-10 mr-6 w-13 h-13 rounded-full bg-yellow-600 text-white flex items-center justify-center font-semibold">
              3
            </span>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4 h-8">
              <span className="text-yellow-500 text-xl">📅</span>
              <h3 className="text-xl font-semibold text-gray-800">
                Expert Processing
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Your garments receive specialized care at our state-of-the-art facility.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                Individual garment tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
                Quality control at every stage
              </li>
            </ul>
          </div>
        </div>

<div className="relative grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-center">

          <div className="bg-white rounded-2xl shadow-lg p-8 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-yellow-500 text-xl">🔒</span>
              <h3 className="text-xl font-semibold text-gray-800">
               Luxury Delivery
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
             Impeccably packaged garments returned at your preferred time.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
Same-day delivery available              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✓</span>
          Hanger-ready with protective covers</li>
            </ul>
          </div>


          <div className="relative hidden md:flex justify-center order-1 md:order-2">
            <span className="absolute  bg-yellow-500"></span>
            <span className="relative right-155 z-10  mr-6 w-13 h-13 rounded-full bg-yellow-600 text-white flex items-center justify-center font-semibold">
              4
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg order-3 transition duration-500 hover:scale-105">
            <video className="w-full h-70 object-cover" >
              <source src={ExpertProcessing} type="video/mp4" />
            </video>
          </div>
        </div>
            <button className="bg-black text-white ml-135 mt-10  font-semibold px-5 py-2 h-15 w-60 rounded-4xl  transition-transform hover:scale-105 duration-300"> Scedule Your Pickup<b>+</b></button>

      </div>
    </section>
  );
};

export default HowItWorks;
