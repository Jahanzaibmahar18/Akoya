import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import eco from "../../assets/Images/eco.jpg";
import exectiveCollection from "../../assets/Images/exectiveCollection.jpg";
import platinumCare from "../../assets/Images/platinumCare.jpg";

const slides = [
  {
    title: "Contact Akoya Laundry",
    subtitle: "Luxury laundry services tailored to your needs in Doha, Qatar",
    image: eco,
  },
  {
    title: "Professional Care",
    subtitle: "Expert fabric handling with eco-friendly detergents",
    image: exectiveCollection,
  },
  {
    title: "Express Service",
    subtitle: "Quick turnaround without compromising quality",
    image: platinumCare,
  },
];

const ContactHead = () => {
  return (
    <section className="relative w-full h-[90vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden group">

              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              <div className="absolute inset-0 bg-black/50 z-10" />

              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-2xl">
                    <h1 className="text-white text-4xl md:text-5xl font-light mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-[#d4af37] text-lg md:text-xl">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ContactHead;
