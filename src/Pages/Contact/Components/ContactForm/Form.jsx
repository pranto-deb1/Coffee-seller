import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Form = () => {
  return (
    <section className=" py-16 px-6 md:px-12 lg:px-24 font-serif">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* বাম দিকের সেকশন: যোগাযোগ তথ্য */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-3xl italic font-bold text-[#6d4c41] leading-tight">
            Get in Touch with Cafeteria TNC: <br /> Reach Out Today!
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-black mt-1" />
              <p className="text-gray-600 text-lg leading-relaxed">
                930 Hilgard Ave, Los Angeles, CA <br /> 900XX, United States.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-black" />
              <p className="text-gray-600 text-lg">(406) X55-0120</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-black" />
              <p className="text-gray-600 text-lg">hello@yourdomain.com</p>
            </div>
          </div>
        </div>

        {/* ডান দিকের সেকশন: মেসেজ ফর্ম */}
        <div className="space-y-6">
          <h2 className="text-3xl italic font-bold text-[#6d4c41]">
            Send Us a Message: Get in Touch<br></br> with Cafeteria TNC
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-6 py-3 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#c59d4c] placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-6 py-3 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#c59d4c] placeholder-gray-400"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full px-6 py-3 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#c59d4c] placeholder-gray-400"
            />

            <textarea
              placeholder="Enter your message"
              rows="5"
              className="w-full px-6 py-4 border bg-white border-gray-300 rounded-3xl focus:outline-none focus:ring-1 focus:ring-[#c59d4c] placeholder-gray-400 resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#c59d4c] hover:bg-[#b08b3e] text-white font-medium py-3 px-10 rounded-full transition duration-300 ease-in-out shadow-sm"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
