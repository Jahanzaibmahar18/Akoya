import React from "react";
import resturation from "../../assets/Images/resturation.jpg"
import suitplastic from "../../assets/Images/suitplastic.jpeg"
import box from "../../assets/Images/box.jpeg"
const packages = [

    {
        name: "Plastic Wrap",
        image: suitplastic,
        description:
            "Cashmere-lined protective casing with magnetic closure and monogram option.",
        price: "+10 QAR",
    },
    {
        name: "Luxury Fabric Wrap",
        image: resturation,
        description:
            "Handcrafted wooden presentation case with velvet interior and scent capsule.",
        price: "+4 QAR",
    },
    {
        name: "Premium Gift Box",
        image: box,
        description:
            "Premium silk tissue wrapping with signature Akoya branding for an elegant finish.",
        price: "+2 QAR",
    },
];

const FinalTouch = () => {
    return (
        <div className="min-h-screen bg-[#f7f7f7] py-20 px-4">

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    The Final Touch
                </h1>
                <p className="text-gray-600 text-lg">
                    Premium packaging options to elevate your garment presentation
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-103  duration-500 transition overflow-hidden flex flex-col"
                    >
                        <div className="h-100 w-full ">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
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

                                <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-semibold px-5 py-2 rounded-full transition">
                                    +10  Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-black text-white ml-135 mt-10  font-semibold px-5 py-2 h-13 w-60 rounded-4xl  transition-transform hover:scale-105 duration-300"> Book Your Order</button>
        </div>

    );
};

export default FinalTouch;
