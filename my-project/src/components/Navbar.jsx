
import React, { useState } from 'react';
import tech from '../assets/tech.png';
import { NavbarMenu } from '../Mockdata/data';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative z-50 bg-white shadow-md">
      <nav className="flex items-center justify-between w-[92%] mx-auto py-3 relative">
        {/* Logo */}
        <div>
          <img src={tech} alt="Tech Logo" className="h-10" />
        </div>

        {/* Menu links */}
        <div
          className={`absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 transition-all duration-300 ${
            menuOpen ? 'top-[60px]' : '-top-[500px]'
          } z-40`}
        >
          <ul className="flex md:flex-row flex-col items-start md:items-center gap-6 md:gap-[4vw] text-black">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a href={item.link} className="hover:text-[#163156]">
                  {item.title}
                </a>
              </li>
            ))}

            {/* Mobile Register button */}
            <li className=" md:hidden">
              <a href="#">
                <button className="px-5 py-1 text-white rounded-full bg-[#163156] w-full">
                  Register now
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Register button & Mobile menu toggle */}
        <div className="relative z-50 flex items-center gap-6">
          {/* Desktop Register button */}
          <a href="#" className="hidden sm:block">
            <button className="px-5 py-1 text-white rounded-full bg-[#163156]">
              Register now
            </button>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="text-3xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
