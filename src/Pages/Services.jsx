import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import pressing from "../assets/Images/pressing.jpg";
import dryCleaning from "../assets/Images/dryCleaning.jpg";
import couture from "../assets/Images/pressing.jpg"; // replace with real image if available
import PersonalizedService from "../Components/homeComponents/Personalized";
import expressing from "../assets/Images/expressing.jpg";
import care from "../assets/Images/care.jpg"
import resturation from "../assets/Images/resturation.jpg"
import Pickup from "../assets/Images/Pickup.jpg"
import fragrance from "../assets/Images/fragrance.jpg"
import dishdasha from "../assets/Images/dishdasha.webp"
import childdishdasha from "../assets/Images/childdishdasha.jpg"
import bisht from "../assets/Images/bisht.jpg"
import ghutra from "../assets/Images/ghutra.jpg"
import kurta from "../assets/Images/kurta.jpg"
import kurtaPajama from "../assets/Images/kurtaPajama.jpg"
import abaya from "../assets/Images/abaya.jpg"
import kameez from "../assets/Images/kameez.jpg"
import jalabiya from "../assets/Images/Jalabiya.jpg"
import abayas from "../assets/Images/abayas.jpg"
import hijab from "../assets/Images/hijab.png"
import gents from "../assets/Images/gents.jpg"
import dress from "../assets/Images/dress.jpg"
import dresslong from "../assets/Images/dresslong.jpg"
import overcoat from "../assets/Images/overcoat.jpg"
import military from "../assets/Images/military.jpg"
import blouse from "../assets/Images/blouse.jpg"
import bathrob from "../assets/Images/bathrob.jpg"
// import executivepressing from "../assets/Images/executivepressing.jpg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const serviceSlides = [
    {
        title: "Professional Laundry & Dry Cleaning",
        subtitle: "Premium garment care with expert handling — from daily wear to luxury pieces.",
        image: dryCleaning,
    },
    {
        title: "Executive Pressing Services",
        subtitle: "Crisp finishes for business attire with precision steam technology.",
        image: pressing,
    },
    {
        title: "Couture Care for Designer Garments",
        subtitle: "Hand-cleaning for designer garments and delicate fabrics.",
        image: couture,
    },
];

const Services = () => {
    const services = [
        {
            title: "Dry Cleaning",
            image: dryCleaning,
            description:
                "Expert care for suits and delicate fabrics using eco-friendly solvents.",
            price: "From 6 QAR",
            category: "dry cleaning",
        },
        {
            title: "Executive Pressing",
            image: expressing,
            description:
                "Crisp finishes for business attire with precision steam technology.",
            price: "From 3 QAR",
            category: "pressing",
        },
        {
            title: "Couture Care",
            image: care,
            description:
                "Hand-cleaning for designer garments and delicate fabrics.",
            price: "From 7 QAR",
            category: "specialty",
        },
        {
            title: "Bisht Restoration",
            image: resturation,
            description:
                "Everyday washing and folding with premium detergents.",
            price: "From 4 QAR",
            category: "traditional",
        },
        {
            title: "Express Service",
            image: Pickup,
            description:
                "Fast turnaround for urgent laundry and pressing needs.",
            price: "From 10 QAR",
            category: "express",
        },
        {
            title: "Fragrance Infusion",
            image: fragrance,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Dishdasha",
            image: dishdasha,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Child Dishdasha",
            image: childdishdasha,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Bisht",
            image: bisht,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Ghutra",
            image: ghutra,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Kurta",
            image: kurta,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },

        {
            title: "Kurta Pyjama (Set)",
            image: kurtaPajama,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Kameez",
            image: kameez,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Jalabiya",
            image: jalabiya,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Abaya",
            image: abaya,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Abaya Special",
            image: abayas,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Hijab",
            image: hijab,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Gent Suit (3pcs)",
            image: gents,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Dress (Short)",
            image: dress,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Dress (Long)",
            image: dresslong,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Overcoat",
            image: overcoat,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },

        {
            title: "Military Uniform",
            image: military,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Blouse (Special)",
            image: blouse,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },
        {
            title: "Bath Robe",
            image: bathrob,
            description:
                "Stain removal, fabric softening, and special treatments.",
            price: "From 2 QAR",
            category: "add-on",
        },

    ];

    const categories = [
        "all",
        "dry cleaning",
        "pressing",
        "specialty",
        "traditional",
        "express",
        "add-on",
    ];

    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredServices =
        selectedCategory === "all"
            ? services
            : services.filter(
                (service) => service.category === selectedCategory
            );

    return (
        <div className="min-h-screen bg-[#f7f5f2]">

            <section className="relative w-full h-[90vh]">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="h-full"
                >
                    {serviceSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-full bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/20"></div>

                                <div className="relative z-10 h-full flex items-center left-19 gap-3 max-w-7xl mx-auto px-6">
                                    <div className="max-w-xl">
                                        <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
                                            {slide.title}
                                        </h1>
                                        <p className="text-[#d4af37] text-lg mb-8">
                                            {slide.subtitle}
                                        </p>
                                        <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our complete range of premium laundry and garment care services.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition
                  ${selectedCategory === cat
                                        ? "bg-black text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                            >
                               
                                <div className="h-56 w-full overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="p-6">

                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {service.title}
                                        </h3>
                                        <span className="text-sm font-semibold text-yellow-600">
                                            {service.price}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6">
                                        {service.description}
                                    </p>

                                    <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full transition">
                                        Order +
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        
            <PersonalizedService />
        </div>
    );
};

export default Services;
