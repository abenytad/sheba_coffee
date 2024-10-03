'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex justify-between items-center p-5 bg-primary text-white">
            <div className="flex items-center">
                {/* Logo
                <img src="/logo.png" alt="Logo" className="w-12 h-12" /> */}
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Navigation Links (Desktop View) */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-secondary">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-secondary">About Us</Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="hover:text-secondary">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-secondary">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="hover:text-secondary">Gallery</Link>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu (Toggle based on state) */}
            {isMenuOpen && (
                <nav className="absolute top-16 left-0 w-full bg-primary md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li>
                            <Link href="/" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/gallery" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
