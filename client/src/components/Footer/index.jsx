import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blood text-white py-10 mt-20">
      <div className="mx-[9%] flex flex-col md:flex-row justify-between ">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Blood Donation</h2>
          <p className="mt-2 text-sm max-w-md">
            Every drop counts. Donate blood, save lives, and be a hero today!
          </p>
        </div>
    
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Donate Now</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-2 text-sm">Phone: 9129927658</p>
          <p className="mt-1 text-sm">Email: anjalisharma.coder@gmail.com</p>
          <p className="mt-1 text-sm">Address: 130  Noida, India</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-gray-400 pt-5">
        <p>&copy; {new Date().getFullYear()} Blood Donation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
