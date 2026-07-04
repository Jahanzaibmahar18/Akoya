import React from "react";
import {FaInstagram,FaFacebookF,FaXTwitter,FaLocationDot,FaPhone,FaEnvelope,} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <img
            src="https://lundary.vercel.app/companylogo.png"
            alt="Akoya Luxury Laundry"
            className="w-40 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Luxury garment care redefined. Serving Doha's discerning clients
            with unparalleled quality and service.
          </p>

          <div className="flex gap-4 mt-6 text-lg text-gray-400">
            
            <FaXTwitter className="hover:text-[#d4af37] cursor-pointer" />
            <FaInstagram className="hover:text-[#d4af37] cursor-pointer" />
            <FaFacebookF className="hover:text-[#d4af37] cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold mb-5 tracking-wide">
            OUR SERVICES
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Premium Laundry",
              "Dry Cleaning",
              "Steam Pressing",
              "Fragrance Infusion",
              "Couture Care",
              "VIP Club",
            ].map((service, index) => (
              <li
                key={index}
                className="hover:text-[#d4af37] cursor-pointer"
              >
                ▸ {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold mb-5 tracking-wide">
            CONTACT US
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-[#d4af37]" />
              West Bay, Doha, Qatar
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#d4af37]" />
              +974 3368 9993
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#d4af37]" />
              Akoyaluxurylaundry@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d4af37] font-semibold mb-5 tracking-wide">
            NEWSLETTER
          </h3>
          <p className="text-sm mb-4">
            Subscribe for exclusive offers and garment care tips.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-[#1e1e1e] border border-gray-700 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]"
          />
          <button className="w-full mt-4 bg-[#d4af37] text-black font-semibold py-3 rounded hover:opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-14 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Akoya Luxury Laundry. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
