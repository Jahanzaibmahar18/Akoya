import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isVisionMissionPage = location.pathname === "/VisionMission";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-50">
      <nav
        className={`w-full transition-all duration-300 ${isVisionMissionPage
          ? "bg-blue-900 shadow-lg"
          : scrolled
            ? "bg-black/50 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <img
            src="https://lundary.vercel.app/companylogo.png"
            alt="Company Logo"
            className="h-10 w-auto"
          />

          {/* Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
            <li>
              <Link
                to="/"
                className={`transition-colors duration-300 hover:text-yellow-400 ${location.pathname === "/" ? "text-yellow-400" : "text-white"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-colors duration-300 hover:text-yellow-400 ${location.pathname === "/about" ? "text-yellow-400" : "text-white"}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`transition-colors duration-300 hover:text-yellow-400 ${location.pathname === "/services" ? "text-yellow-400" : "text-white"}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/VisionMission"
                className={`transition-colors duration-300 hover:text-yellow-400 ${location.pathname === "/VisionMission" ? "text-yellow-400" : "text-white"}`}
              >
                VisionMission
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`transition-colors duration-300 hover:text-yellow-400 ${location.pathname === "/contact" ? "text-yellow-400" : "text-white"}`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2 border rounded-2xl border-yellow-400 text-white hover:bg-yellow-400 hover:text-black transition">
              Client Login
            </button>
            <Link to="/BookNow">
              <button className="px-5 py-2 border rounded-2xl border-yellow-400 text-white hover:bg-yellow-300 hover:text-black transition">
                Book Now
              </button>
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
