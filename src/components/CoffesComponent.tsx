import Image from 'next/image';
import Link from 'next/link';

export default function CoffesComponent() {
    // Sample coffee data
    const coffees = [
        {
            id: 1,
            name: "Espresso",
            description: "A strong and bold coffee shot.",
            oldPrice: "$5.00",
            newPrice: "$4.00",
            imageUrl: "/images/espresso.jpg" // Update with actual image path
        },
        {
            id: 2,
            name: "Cappuccino",
            description: "Rich espresso topped with creamy foam.",
            oldPrice: "$6.00",
            newPrice: "$5.50",
            imageUrl: "/images/cappuccino.jpg" // Update with actual image path
        },
        {
            id: 3,
            name: "Latte",
            description: "Smooth and creamy with a hint of sweetness.",
            oldPrice: "$5.50",
            newPrice: "$4.50",
            imageUrl: "/images/latte.jpg" // Update with actual image path
        },
        {
            id: 4,
            name: "Americano",
            description: "A classic coffee with a rich flavor.",
            oldPrice: "$4.50",
            newPrice: "$3.50",
            imageUrl: "/images/americano.jpg" // Update with actual image path
        },
        {
            id: 5,
            name: "Mocha",
            description: "A delightful blend of chocolate and coffee.",
            oldPrice: "$6.00",
            newPrice: "$5.00",
            imageUrl: "/images/mocha.jpg" // Update with actual image path
        },
        {
            id: 6,
            name: "Flat White",
            description: "Rich espresso with velvety steamed milk.",
            oldPrice: "$5.50",
            newPrice: "$4.75",
            imageUrl: "/images/flat-white.jpg" // Update with actual image path
        }
    ];

    return (
        <div className="w-full py-8 bg-gray-100 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Our Best Selling Coffees
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full max-w-screen-xl px-2">
                {coffees.map(coffee => (
                    <div key={coffee.id} className="bg-primary shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-120"> {/* Removed rounded class */}
                        <Image 
                            src={coffee.imageUrl} 
                            alt={coffee.name} 
                            width={400}  // Adjust the width as needed
                            height={650} // Height for the image
                            className="w-full h-80 object-cover" // Image height
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
                            <p className="text-secondary mb-2 text-sm md:text-base">{coffee.description}</p> {/* Adjusted description font size */}
                            <div className="flex items-center justify-between">
                                <span className="text-secondary line-through text-sm md:text-base">{coffee.oldPrice}</span> {/* Adjusted old price font size */}
                                <span className="text-xl font-bold text-white">{coffee.newPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/coffees" className="mt-8 text-primary text-lg font-semibold underline">
                See All Coffees
            </Link>
        </div>
    );
}
