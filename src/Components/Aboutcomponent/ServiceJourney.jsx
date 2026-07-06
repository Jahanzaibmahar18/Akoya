import React from "react";
import {Shirt,ShoppingBag,SprayCan,Droplets,Package,Gift,MessageCircle,Bot,} from "lucide-react";

const ServiceJourney = () => {
  const steps = [
    {
      icon: <Shirt className="text-[#D4AF37]" size={28} />,
      title: "1. Select Wash Type",
      desc: "Standard or Express wash options to suit your needs",
    },
    {
      icon: <ShoppingBag className="text-[#D4AF37]" size={28} />,
      title: "2. Choose Garments",
      desc: "From daily wear to delicate couture – we handle all",
    },
    {
      icon: <SprayCan className="text-[#D4AF37]" size={28} />,
      title: "3. Steam Finishing",
      desc: "Professional pressing for impeccable results",
    },
    {
      icon: <Droplets className="text-[#D4AF37]" size={28} />,
      title: "4. Fragrance Infusion",
      desc: "Luxury scents for men and women",
    },
    {
      icon: <Package className="text-[#D4AF37]" size={28} />,
      title: "5. Packaging",
      desc: "Choose from our premium wrapping options",
    },
    {
      icon: <Gift className="text-[#D4AF37]" size={28} />,
      title: "6. Personalization",
      desc: "Add a custom card for gifts",
    },
    {
      icon: <MessageCircle className="text-[#D4AF37]" size={28} />,
      title: "7. WhatsApp Checkout",
      desc: "Easy confirmation via WhatsApp",
    },
    {
      icon: <Bot className="text-[#D4AF37]" size={28} />,
      title: "8. AI Assistance",
      desc: "3D avatars guide you in Arabic & English",
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-light mb-16">
          Our Service Journey
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceJourney;
