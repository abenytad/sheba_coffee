"use client";
import Link from 'next/link'; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTiktok } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; 
import { useEffect, useState } from 'react';

export default function MainComponent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
         '/images/bg4.jpg',
        '/images/bg1.jpg',
        '/images/bg2.webp',
        '/images/bg3.jpg',
       
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="w-full h-[calc(82vh)] bg-cover bg-center flex flex-col justify-center items-center p-4 text-center transition-all duration-1000 ease-in-out"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundAttachment: 'fixed', // Make background image sticky
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent image from repeating
                backgroundSize: 'cover', // Cover the entire area
            }}
        >
            {/* Sheba Coffee Slogan Section */}
            <div className="flex flex-col items-center mt-8 md:mt-16">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-[2px] bg-[#F5DEB3] md:w-20 lg:w-24"></div> {/* Responsive width reduced */}
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#FFFFFF]">
                        Sheba Coffee
                    </h2>
                    <div className="w-16 h-[2px] bg-[#F5DEB3] md:w-20 lg:w-24"></div> {/* Responsive width reduced */}
                </div>
                <p className="text-xl md:text-2xl lg:text-4xl text-[#FFFFFF] mt-4">
                    The Queen’s Brew from the Heart of Ethiopia
                </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-8 justify-center flex-wrap"> {/* Added flex-wrap for responsiveness */}
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
                <Link href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <SiX className="text-[#F5DEB3] hover:text-coffe w-8 h-8 md:w-10 md:h-10" />
                </Link>
            </div>
        </div>
    );
}
