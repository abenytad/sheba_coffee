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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-screen-xl px-2"> {/* Adjusted gap for mobile view */}
                {coffees.map(coffee => (
                    <div key={coffee.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <Image 
                            src={coffee.imageUrl} 
                            alt={coffee.name} 
                            width={400}  // Adjust the width as needed
                            height={300} // Adjust the height as needed for responsive design
                            className="w-full h-56 object-cover" // Increased height
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{coffee.name}</h3>
                            <p className="text-gray-600 mb-2">{coffee.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400 line-through">{coffee.oldPrice}</span>
                                <span className="text-xl font-bold text-primary">{coffee.newPrice}</span>
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
