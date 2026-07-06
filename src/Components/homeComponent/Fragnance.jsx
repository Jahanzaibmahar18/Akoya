import React from "react";
import maknoun from "../../assets/Images/maknoun.jpg"
import mad from "../../assets/Images/mad.jpg"
import Lulwa from "../../assets/Images/Lulwa.jpg"
import sadf from "../../assets/Images/sadf.jpg"
const fragrances = [
  {
    name: "Maknoun",
    image:maknoun,
    description:
      "A luxurious fragrance that embodies the charm of a confident man. A refined blend of fresh fruits, elegant florals, and a warm base of musk and amber, leaving an unforgettable signature.",
    price: "7 QAR",
  },
  {
    name: "Mad",
    image:mad,
    description:
      "A powerful masculine fragrance that radiates prestige and luxury. Its unique composition blends saffron, jasmine, and incense, with a leathery amber base for a timeless presence.",
    price: "7 QAR",
  },
  {
    name: "Lulwa",
    image:Lulwa,
    description:
      "The fragrance of radiant femininity, combining modern freshness with timeless elegance. A stunning blend of bergamot, ginger, and patchouli with a soft musky touch.",
    price: "7 QAR",
  },
  {
    name: "Sadaf",
    image: sadf,
    description:
      "A refreshing fragrance for both men and women, featuring bright citrus notes, warm ginger, and ambergris for an elegant and long-lasting touch.",
    price: "7 QAR",
  },
];

const Fragrances = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] py-20 px-4">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Akoya Signature Fragrances
        </h1>
        <p className="text-gray-600 text-lg">
          Premium scents crafted to elevate your laundry experience
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {fragrances.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl  overflow-hidden flex flex-col hover:scale-105 transition duration-500"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover "
              />
            </div>

            <div className="p-6 flex flex-col ">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {item.name}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 ">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-yellow-600 font-semibold">
                  {item.price}
                </span>

                <button className="bg-yellow-600 hover:opacity-90 text-black text-sm font-semibold px-5 py-2 rounded-full transition">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fragrances;
