import React from "react";
import { contactDetails } from '../Mockdata/getintouch'

const GetinTouch = () => {
  return (
    <div className="px-4 py-8">
      {/* Header */}
      <div className="max-w-md mx-auto mb-8 text-center">
        <p className="text-[20px] text-[#163156] font-bold uppercase mt-4">
          Get in Touch
        </p>
        <p className="text-[#163156]">
          Have questions? We're here to help you on your journey to tech excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid items-start max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
        {/* Form */}
        <form className="p-6 space-y-5 bg-white shadow-sm rounded-xl">
          <Input label="Full Name" type="text" placeholder="Enter your name" />
          <Input label="Email Address" type="email" placeholder="Enter your email" />
          <Textarea label="Message" placeholder="Write your message..." />

          <button
            type="submit"
            className="w-full py-2 mt-2 text-white bg-[#163156] rounded-lg hover:bg-[#1d4173] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white shadow-sm rounded-xl"
            >
              <img src={item.img} alt={item.title} className="w-10 h-10" />
              <div>
                <p className="font-semibold text-[#163156]">{item.title}</p>
                <p className="text-sm text-gray-700">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const Input = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163156]"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
    <textarea
      {...props}
      rows="4"
      className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#163156]"
    ></textarea>
  </div>
);

export default GetinTouch;
