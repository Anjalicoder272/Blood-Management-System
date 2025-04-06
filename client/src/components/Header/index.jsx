import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  return (
    <nav  onMouseEnter={() => setDropdownOpen(true)}
    onMouseLeave={() => setDropdownOpen(false)} className="text-black items-center mb-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-black">BloodBank</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link to="/" className="hover:text-blood font-bold">Home</Link></li>
          <li><Link to="/about" className="hover:text-blood font-bold">About Us</Link></li>
          <li><Link to="/donate" className="hover:text-blood font-bold">Find Blood</Link></li>
          
          {/* Dropdown for Register Now */}
          <li 
            className="relative"
          >
            <button className="hover:text-blood font-bold">Register Now</button>
            {dropdownOpen && (
              <ul className="absolute bg-white border-[2px] border-black mt-2 p-2 rounded-lg shadow-lg">
                <li><Link to="/registeruser" className="block hover:text-blood py-2 px-4">User</Link></li>
                <li><Link to="/registerorg" className="block hover:text-blood py-2 px-4">Organization</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-blood font-bold"><button className="border-[2px] border-black px-[22px] py-1 rounded-[10px]">Log In</button></Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden text-center space-y-4 py-4">
          <li><Link to="/" className="block hover:text-blood font-bold">Home</Link></li>
          <li><Link to="/about" className="block hover:text-blood font-bold">About Us</Link></li>
          <li><Link to="/donate" className="block hover:text-blood font-bold">Find Blood</Link></li>

          {/* Mobile Dropdown for Register Now */}
          <li className="relative">
            <button
              className="block hover:text-blood font-bold w-full text-left"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Register Now
            </button>
            {dropdownOpen && (
              <ul className="absolute bg-white border-[2px] border-black mt-2 p-2 rounded-lg shadow-lg w-full">
                <li><Link to="/registeruser" className="block hover:text-blood py-2 px-4">User</Link></li>
                <li><Link to="/registerorg" className="block hover:text-blood py-2 px-4">Organization</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="font-bold"><button className="border-[2px] hover:text-white hover:border-blood hover:bg-blood border-black px-[22px] py-1 rounded-[10px]">Log In</button></Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
