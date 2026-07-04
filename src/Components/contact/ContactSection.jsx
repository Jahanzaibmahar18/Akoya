import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#faf7f2] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-3 text-[#d4af37] text-sm tracking-widest">
            <span className="w-12 h-1 bg-[#d4af37]" />
            GET IN TOUCH
            <span className="w-12 h-1 bg-[#d4af37]" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              How to reach us
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Our concierge team is available to assist you with any inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3e8c9] flex items-center justify-center">
                  <MapPin size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-gray-600">
                    West Bay, Doha, Qatar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3e8c9] flex items-center justify-center">
                  <Phone size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-gray-600">
                    +974 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f3e8c9] flex items-center justify-center">
                  <Mail size={18} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-gray-600">
                    info@akoyalaundry.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-medium mb-6">
              Send us a message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#d4af37]"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-[#d4af37]"
              />

              <button className="w-full bg-black text-white py-3 rounded-xl hover:scale-105 transition">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
