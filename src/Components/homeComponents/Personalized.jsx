import React from "react";

const PersonalizedService = () => {
    
  return (
    <section className="w-full bg-[#1b1b1b] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-2xl   text-[#d4af37] mb-6">
          Need Personalized Service?
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10 ">
          Our VIP concierge team is available 24/7 to handle special requests,
          delicate items, or bulk orders for businesses and residences.
        </p>

        <button
          className="inline-flex items-center gap-2 bg-[#d4af37] text-black 
                     font-medium px-8 py-3 rounded-full 
                     hover:bg-[#c5a12f] transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Contact Concierge
          <span className="text-lg"><i class="fa-regular fa-comment-dots"></i></span>
        </button>

      </div>
    </section>
  );
};

export default PersonalizedService;
