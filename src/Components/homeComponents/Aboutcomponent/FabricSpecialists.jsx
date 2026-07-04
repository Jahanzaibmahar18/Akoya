import React from "react";
import ahmad from "../../../assets/Images/ahmad.webp";
import layla from "../../../assets/Images/laylah.webp";
import yousef from "../../../assets/Images/yousef.webp";
const specialists = [
  {
    name: "Ahmed Al-Mansoori",
    role: "Head of Couture Care",
    desc: "20+ years in luxury garment care",
    img: ahmad,
  },
  {
    name: "Layla Hassan",
    role: "Fabric Technology Expert",
    desc: "Fabric scientist and preservation expert",
    img: layla,
  },
  {
    name: "Yousef Ibrahim",
    role: "Operations Director",
    desc: "Ensuring seamless service delivery",
    img: yousef,
  },
];

const FabricSpecialists = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-20">
          <h2 className="text-4xl font-light mb-4 text-black">
            Meet Our Fabric Specialists
          </h2>

          <div className="w-20 h-2px bg-[#D4AF37] mx-auto mb-6"></div>

          <p className="text-black max-w-2xl mx-auto">
            Our team of garment care experts brings decades of combined
            experience in handling luxury fabrics
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {specialists.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] rounded-2xl px-8 py-14 text-center
               transition duration-300"
            >

              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 rounded-full border-4 border-[#D4AF37] p-1">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover "
                  />
                </div>
              </div>

              
              <h3 className="text-lg font-semibold mb-1">
                {item.name}
              </h3>

              <p className="text-[#D4AF37] text-sm mb-4">
                {item.role}
              </p>

              <p className="text-black text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FabricSpecialists;
