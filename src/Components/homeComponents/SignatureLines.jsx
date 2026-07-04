import React from "react";
import img from "../../assets/Images/sadf.jpg";
import exectiveCollection from "../../assets/Images/exectiveCollection.jpg";
import { useNavigate } from "react-router-dom";


const collections = [
  {
    title: "The Platinum Care",
    description:
      "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
    image: img,
  },
  {
    title: "Executive Collection",
    description:
      "Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.",
    image: exectiveCollection,
  },
  {
    title: "Couture Preservation",
    description:
      "Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.",
    image: "https://lundary.vercel.app/home/professionalCollection.jpg",
  },
];

const SignatureLines = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold">Signature Lines</h2>
          <div className="flex items-center justify-center gap-4 mt-3">
            <span className="h-px w-12 bg-[#c9a24d]" />
            <p className="uppercase tracking-[0.25em] text-sm text-[#c9a24d]">
              The Akoya Collection
            </p>
            <span className="h-px w-12 bg-[#c9a24d]" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative h-80 w-full rounded-3xl overflow-hidden
                         transform transition-transform duration-500 hover:scale-105 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-5">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button className="w-fit inline-flex items-center gap-2 bg-orange-300 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-orange-300 transition duration-700">
                  Discover →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-16">
        <button
          onClick={() => navigate("/services")}
          className="inline-flex items-center gap-2 border-2 text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all duration-700"
        >
          View All Collections →
        </button>
      </div>
      </div>
    </section>
  );
};

export default SignatureLines;
