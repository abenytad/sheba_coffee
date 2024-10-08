'use client';

import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">

        {/* Flex container for centering sections */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24">

          {/* Center with contact info */}
          <div className="text-center mb-2">
            <p className="mb-1 text-sm md:text-lg"> {/* Adjusted size for responsiveness */}
              <strong>Email:</strong> <span className="text-secondary">info@shebacoffee.com</span>
            </p>
            <p className="mb-1 text-sm md:text-lg"> {/* Adjusted size for responsiveness */}
              <strong>Phone:</strong> <span className="text-secondary">+251-123-456-789</span>
            </p>
          </div>

          {/* Center with name and slogan */}
          <div className="text-center mb-2">
            <hr className="border-t-2 border-white w-full mb-2" /> {/* Line before the name */}
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-1"> {/* Adjusted size for responsiveness */}
              Sheba Coffee
            </h2>
            <p className="italic text-sm md:text-lg text-secondary"> {/* Adjusted size for responsiveness */}
              The Queen&rsquo;s brew at the heart of Ethiopia {/* Changed ' to &rsquo; */}
            </p>
            <hr className="border-t-2 border-white w-full mt-2" /> {/* Line after the name */}
          </div>

          {/* Right side with social media icons */}
          <div className="flex flex-wrap space-x-4 justify-center mb-2">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaFacebook size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaTwitter size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaInstagram size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaLinkedin size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
            <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaTelegram size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-full p-2 hover:bg-primary transition duration-300">
                <FaYoutube size={20} className="text-black" /> {/* Reduced size for mobile */}
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* Footer bottom with year */}
      <div className="mt-4 text-center text-secondary">
        <p className="text-sm md:text-lg">&copy; 2024 Sheba Coffee. All Rights Reserved.</p> {/* Adjusted size for responsiveness */}
      </div>
    </footer>
  );
}
