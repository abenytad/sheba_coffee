import React from 'react';

export default function VideoComponent() {
    return (
        <div className="bg-secondary p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Watch Video</h2>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">Our Mission</h3>
            <p className="text-white text-center mb-6">
                Our mission is to ensure that every cup of Sheba Coffee reflects the authenticity and richness of Ethiopian coffee culture.
            </p>
            <div className="w-full max-w-3xl">
                <iframe 
                    className="w-full h-[250px] md:h-[350px] lg:h-[450px]" // Further decreased height for responsiveness
                    src="https://www.youtube.com/embed/o3rnKueEj8c?list=RDUny6dD0djIk&index=13" // Sample video about coffee
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
