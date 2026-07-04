import React from "react";
import ourmission from "../assets/Images/ourmission.jpeg"
const VisionMission = () => {
  return (
    <section className="bg-[#f8f9fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h1 className="text-5xl font-semibold mb-2">Vision & Mission</h1>
          <p className="text-[#D4AF37] font-medium">
            Akoya Premium Laundry
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Redefining Fabric Care and Personal Luxury in Qatar
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <div className="space-y-8 sticky top-24 h-fit">

       <div className="relative rounded-2xl overflow-hidden shadow-2xl">

  {/* Image */}
  <img
    src={ourmission}
    alt="ourmission"
    className="w-full h-150 object-cover"
  />

  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Text */}
  <div className="absolute bottom-0 left-0 w-full p-4 z-20 text-white">
    <h3 className="text-2xl font-semibold">
      Excellence in Every Detail
    </h3>
    <p className="text-sm">
      Technology, Artistry, and Care
    </p>
  </div>
</div>


            <div className="bg-[#D4AF37] rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-1 text-black">
                Experience Excellence Today
              </h3>
              <button className="bg-white w-62 h-10  px-6   rounded-2xl  text-[#D4AF37] hover:scale-105  duration-500  transition">
                Book Now
              </button>
            </div>

          </div>

          <div className="lg:col-span-2 space-y-10">


            <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 overflow-hidden">
              <div className="bg-[#D4AF37] text-white flex items-center justify-center p-10">
                <h2 className="text-3xl font-semibold">Our Vision</h2>
              </div>
              <div className="md:col-span-2 p-10">
                <p className="text-gray-600 leading-relaxed">
                  To redefine fabric care and personal luxury in Qatar through
                  innovation, fragrance, and flawless service — making Akoya
                  Premium Laundry the symbol of elegance and trust in every home.
                </p>
              </div>
            </div>

            <div className="rounded-2xl shadow-xl h-50 grid grid-cols-1 md:grid-cols-3 overflow-hidden">

              <div className="md:col-span-2 bg-white p-5 ">
                <p className="text-gray-600 leading-relaxed">
                  At Akoya Premium Laundry, we strive to offer premium laundry,
                  delivery, and custom perfume solutions that combine technology,
                  artistry, and care. Our mission is to transform daily routines
                  into refined experiences through exceptional service, attention
                  to detail, and sustainable practices.
                </p>
              </div>

              <div className=" from-[#0f172a] bg-blue-900 to-[#020617]  text-white flex items-center justify-center p-5">
                <h2 className="text-3xl font-semibold">Our Mission</h2>
              </div>



            </div>

          <div className="bg-white rounded-2xl shadow-xl p-12">
  <h2 className="text-4xl font-semibold mb-12 text-center">
    Our Core Values
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
    {[
      {
        title: "Excellence",
        desc: "Every item, every wash, every fragrance meets the highest standards.",
      },
      {
        title: "Innovation",
        desc: "We use advanced systems and smart logistics to deliver faster and cleaner results.",
      },
      {
        title: "Sustainability",
        desc: "We commit to eco-friendly methods and responsible operations.",
      },
      {
        title: "Customer Focus",
        desc: "Your satisfaction drives everything we do.",
      },
    ].map((item, i) => (
    <div
  key={i}
  className="flex gap-4 p-6 rounded-xl bg-blue-80 border-l-4 border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-300/25"
>
  {/* Icon */}
  <div className="w-10 h-10 bg-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
    <span className="w-2 h-2 bg-white rounded-full" />
  </div>

  {/* Text */}
  <div>
    <h4 className="text-lg font-semibold mb-1">
      {item.title}
    </h4>
    <p className="text-gray-600 text-sm">
      {item.desc}
    </p>
  </div>
</div>


    ))}
  </div>
</div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;
