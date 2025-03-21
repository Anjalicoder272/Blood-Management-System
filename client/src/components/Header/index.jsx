import React, { useState } from 'react'
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className= "text-black mb-40 shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold">BloodBank</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/" className="hover:text-red-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
        <li><Link to="/donate" className="hover:text-red-400">Find Blood</Link></li>
        <li><Link to="/contact" className="hover:text-red-400">Register Now</Link></li>
        <li><Link to="/contact" className="hover:text-red-400"><button className='border-[2px] border-black px-[22px] py-1 rounded-[10px]'>Log In</button></Link></li>

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
      <ul className="md:hidden bg-gray-800 text-center space-y-4 py-4">
        <li><Link to="/" className="block hover:text-red-400">Home</Link></li>
        <li><Link to="/about" className="block hover:text-red-400">About Us</Link></li>
        <li><Link to="/donate" className="block hover:text-red-400">Find Blood</Link></li>
        <li><Link to="/contact" className="block hover:text-red-400">Register Now</Link></li>
      </ul>
    )}
  </nav>

  )
}

export default Header;
