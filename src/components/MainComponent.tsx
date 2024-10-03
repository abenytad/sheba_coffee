import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function MainComponent() {
    return (
        <div
            className="w-full h-[calc(100vh-80px)] bg-cover bg-center flex flex-col justify-center items-start p-4 text-left" // Adjust padding for mobile
            style={{ backgroundImage: 'url("/images/bg1.jpg")' }} // Adjust path as needed
        >
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3"> {/* Smaller title size for mobile */}
                Welcome to Our Page
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-secondary mb-4"> {/* Smaller paragraph size for mobile */}
                We offer the best services in town. Join us and follow our journey.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-primary hover:text-secondary w-6 h-6 md:w-8 md:h-8" /> {/* Adjusted icon size for mobile */}
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-primary hover:text-secondary w-6 h-6 md:w-8 md:h-8" /> {/* Adjusted icon size for mobile */}
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-primary hover:text-secondary w-6 h-6 md:w-8 md:h-8" /> {/* Adjusted icon size for mobile */}
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-primary hover:text-secondary w-6 h-6 md:w-8 md:h-8" /> {/* Adjusted icon size for mobile */}
                </a>
            </div>
        </div>
    );
}
