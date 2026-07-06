import React from "react";
import { ShieldCheck, UserCheck, Clock } from "lucide-react";

const Choseakoya = () => {
  const features = [
    {
      icon: <ShieldCheck size={36} className="text-[#D4AF37]" />,
      title: "Premium Quality",
      desc: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
    },
    {
      icon: <UserCheck size={36} className="text-[#D4AF37]" />,
      title: "Personalized Service",
      desc: "Tailored solutions for each garment with our expert fabric specialists",
    },
    {
      icon: <Clock size={36} className="text-[#D4AF37]" />,
      title: "Convenience",
      desc: "24/7 booking with flexible pickup and delivery options",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-light mb-16">
          Why Choose <span className="text-[#D4AF37]">Akoya</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#f3e3f03a] rounded-2xl p-10 text-center  shadow-md transition"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Choseakoya;
