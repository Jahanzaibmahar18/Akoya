import React from "react";
import Choseakoya from "../Components/homeComponents/Aboutcomponent/Choseakoya.jsx";
import ServiceJourney from "../Components/homeComponents/Aboutcomponent/ServiceJourney.jsx";
import FabricSpecialists from "../Components/homeComponents/Aboutcomponent/FabricSpecialists.jsx";

const About = () => {
  return (
    <>
      <section className="flex items-center justify-center bg-linear-to-r from-gray-800 to-gray-300 min-h-screen text-white">
        <div className="text-center px-4">

          <h1 className="text-4xl md:text-6xl font-light tracking-wide">
            Luxury Laundry. Reimagined.
          </h1>

          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-12 h-1px bg-yellow-500"></span>

            <p className="uppercase tracking-widest text-yellow-400 text-sm">
              Akoya Collection
            </p>

            <span className="w-12 h-1px bg-yellow-500"></span>
          </div>

          <button className="mt-10 px-8 py-3 rounded-full text-1xl bg-yellow-500 text-black font-medium hover:bg-yellow-400 hover:scale-105 transition duration-500 ">
            Schedule Your Pickup
          </button>

        </div>
      </section>

      <Choseakoya />
      <ServiceJourney/>
      <FabricSpecialists/>
    </>
  );
};

export default About;

