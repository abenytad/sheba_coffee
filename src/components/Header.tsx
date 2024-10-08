"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const pathname: string = usePathname();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string): boolean => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex flex-col md:flex-row justify-between items-center transition-all duration-300 ease-in-out z-50 w-full ${
        isSticky
          ? "fixed top-0 bg-tertiary h-20"
          : "bg-tertiary h-24"
      }`}
      style={{
        padding: "0 40px",
        transition: "background-color 0.3s ease, height 0.3s ease",
      }}
    >
      {/* Logo Images positioned at the start */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Image
            src="/images/loggo.png"
            alt="Logo"
            width={80}
            height={80}
            className={`transition-transform duration-300 ${isSticky ? 'scale-75' : 'scale-100'}`}
          />
          <Image
            src="/images/loggo2.png"
            alt="Secondary Logo"
            width={80}
            height={80}
            className={`transition-transform duration-300 ${isSticky ? 'scale-75' : 'scale-100'} mx-2`}
          />
          <Image
            src="/images/loggo3.png"
            alt="Tertiary Logo"
            width={80}
            height={80}
            className={`transition-transform duration-300 ${isSticky ? 'scale-75' : 'scale-100'} mx-2`}
          />
        </div>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Flex container to center the links */}
      <div className="flex justify-center w-full">
        {/* Navigation Links centered with adjusted margin */}
        <nav className="hidden md:flex justify-center w-full">
          <ul className="flex justify-center space-x-10 text-white text-sm font-medium">
            <li>
              <Link
                href="/"
                className={`hover:text-primary ${isActive("/") ? "text-primary" : ""}`} // Change to text color for active state
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-primary ${isActive("/about") ? "text-primary" : ""}`}
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`hover:text-primary ${isActive("/blogs") ? "text-primary" : ""}`}
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-primary ${isActive("/contact") ? "text-primary" : ""}`}
              >
                CONTACT US
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`hover:text-primary ${isActive("/gallery") ? "text-primary" : ""}`}
              >
                GALLERY
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Toggle based on state) */}
      {isMenuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-tertiary md:hidden"> {/* Removed mt-2 */}
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                href="/"
                className={`hover:text-primary ${isActive("/") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-primary ${isActive("/about") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                className={`hover:text-primary ${isActive("/blogs") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-primary ${isActive("/contact") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`hover:text-primary ${isActive("/gallery") ? "text-primary" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
