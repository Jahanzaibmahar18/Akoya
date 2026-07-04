import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import PlatinumCare from "../assets/Images/PlatinumCare.jpg"
import eco from "../assets/Images/eco.jpg"
import pressing from "../assets/Images/pressing.jpg"
import SignatureLines from "../Components/homeComponents/SignatureLines.jsx";
import Washed from "../Components/homeComponents/Washed.jsx";
import HowItWorks from "../Components/homeComponents/HowItWorks.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Fragrances from "../Components/homeComponents/Fragrance.jsx";
import FinalTouch from "../Components/homeComponents/FinalTouch.jsx";

const slides = [
  {
    title: "Premium Garment Care",
    subtitle: "Expert cleaning for your most delicate fabrics",
    image: PlatinumCare,
  },
  {
    title: "Eco-Conscious Cleaning",
    subtitle: "Sustainable methods without compromising quality",
    image: eco,
  },
  {
    title: "Precision Pressing",
    subtitle: "Sustainable methods without compromising quality",
    image: pressing,
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative w-full h-[90vh]  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full bg-cover bg-center relative "
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 h-full flex items-center left-10 gap-3 max-w-7xl mx-auto px-6">
                  <div className="max-w-xl">
                    <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-[#d4af37] text-lg mb-8">
                      {slide.subtitle}
                    </p>
                    <button className="bg-[#d4af37] text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
                      Schedule Pickup
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </section>
      <SignatureLines />
      <Washed />
   <Fragrances />
<FinalTouch/>
<HowItWorks/>
    </div>
  );
};

export default Home;
