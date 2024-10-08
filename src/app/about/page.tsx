import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="w-full py-12 px-4 max-w-screen-xl mx-auto">
            {/* Main Title */}
            <h1 className="text-4xl font-bold text-primary text-center mb-6">Sheba Coffee</h1>
            {/* Sub-title */}
            <h2 className="text-2xl font-semibold text-secondary text-center mb-12">The Queen&apos;s Brew from the Heart of Ethiopia</h2>
            
            {/* Section 1: Our Origin */}
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <Image 
                        src="/images/bg1.jpg" 
                        alt="Our Origin" 
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-lg"
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Origin</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Sheba Coffee, founded by Ms. Samrawit Yimer, is deeply inspired by the rich flavors and traditions of Ethiopian coffee. 
                        Named after the legendary Queen of Sheba, our brand represents excellence, heritage, and cultural pride, honoring the ancient coffee-growing traditions of Ethiopia.
                    </p>
                </div>
            </div>

            {/* Section 2: Our Story */}
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-full md:w-1/2 md:order-2 mb-6 md:mb-0 md:ml-8">
                    <Image 
                        src="/images/bg1.jpg" 
                        alt="Our Story" 
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-lg"
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2 md:order-1">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Story</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        From the highlands of Ethiopia, we bring you premium, single-origin coffee. Each cup embodies our dedication to quality 
                        and the rich heritage of Ethiopian coffee culture, connecting you to the lush landscapes and passionate farmers behind every harvest.
                    </p>
                </div>
            </div>

            {/* Section 3: Our Mission */}
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <Image 
                        src="/images/bg1.jpg" 
                        alt="Our Mission" 
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-lg"
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our mission is to share the authentic flavors of Ethiopian coffee with the world while promoting sustainable practices 
                        that uplift local farmers and strengthen communities. We are committed to providing ethically sourced coffee that tells a story with every sip.
                    </p>
                </div>
            </div>

            {/* Section 4: Our Coffee */}
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-full md:w-1/2 md:order-2 mb-6 md:mb-0 md:ml-8">
                    <Image 
                        src="/images/bg1.jpg" 
                        alt="Our Coffee" 
                        width={600} 
                        height={400} 
                        className="rounded-lg shadow-lg"
                        layout="responsive"
                    />
                </div>
                <div className="md:w-1/2 md:order-1">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Our Coffee</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Sheba Coffee offers a diverse selection of luxurious blends and single-origin coffees, handpicked from Ethiopia&apos;s fertile highlands. 
                        Our aim is to provide a unique sensory experience that reflects the dedication and craftsmanship of our farmers.
                    </p>
                </div>
            </div>

            {/* Sheba's Founder Section */}
            <div className="mt-16 text-center">
                <h2 className="text-4xl font-bold text-primary mb-4">Founder</h2>
                <Image 
                    src="/images/bg1.jpg" 
                    alt="Ms. Samrawit Yimer" 
                    width={300} // Adjusted width for the founder's image
                    height={500} // Increased height for the founder's image
                    className="rounded-full mx-auto mb-4"
                    style={{ maxWidth: '100%', height: 'auto' }} // Ensures responsiveness
                />
                <h3 className="text-xl font-semibold text-primary mt-4">Ms. Samrawit Yimer</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    A visionary leader, Ms. Samrawit Yimer founded Sheba Coffee to share the rich legacy of Ethiopian coffee with the world, 
                    ensuring that every cup tells a story of heritage and passion.
                </p>
            </div>
        </div>
    );
}
