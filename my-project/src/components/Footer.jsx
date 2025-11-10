import React from 'react'
import techpro from '../assets/techpro.png'
import Frame67 from '../assets/Frame67.png'
import Frame68 from '../assets/Frame68.png'
import Frame69 from '../assets/Frame69.png'
import Frame70 from '../assets/Frame70.png'
import Frame71 from '../assets/Frame71.png'
import telegram from '../assets/telegram.png'

const Footer = () => {
  return (
    <footer className="bg-[#163156] text-white px-6 sm:px-10 md:px-16 py-12">
      <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Left Section */}
        <div className=" text-start sm:text-left">
          <img
            src={techpro}
            alt="TechPro Logo"
            className="mx-auto mb-4 w-[120px] sm:mx-0 text-start"
          />
          <p className="mb-4 text-sm leading-relaxed">
            Empowering the next generation of tech professionals through
            expert-led courses, hands-on projects, and a supportive global
            community.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-start gap-4 mt-4 sm:justify-start">
            {[Frame67, Frame68, Frame69, Frame70, Frame71].map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="social icon"
                className="w-6 h-6 transition-all cursor-pointer hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-start sm:text-left">
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Courses</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-start sm:text-left">
          <h3 className="mb-3 text-lg font-semibold">Newsletter</h3>
          <p className="mb-3 text-sm">
            Stay updated with our latest courses and tech insights.
          </p>

          <div className="flex flex-col items-center justify-center w-full gap-1 sm:flex-row sm:justify-start">
            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm text-center text-black bg-white rounded-md outline-none sm:flex-1"
            />

            {/* Telegram Icon Button */}
            <button className="flex items-center justify-center bg-white rounded-md hover:bg-gray-200 transition w-[45px] h-[45px] shrink-0 hidden">
              <img
                src={telegram}
                alt="Send"
                className="object-contain w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 mt-10 text-xs leading-relaxed text-center border-t border-gray-600 sm:text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">TechPro Institute.</span> 
        All rights reserved. <br className="sm:hidden" /> Privacy Policy · Terms of Service
      </div>
    </footer>
  )
}

export default Footer

