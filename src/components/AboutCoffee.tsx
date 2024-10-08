export default function AboutCoffee() {
    return (
        <div
            className="w-full h-[70vh] bg-cover bg-center flex flex-col items-start justify-center px-4"
            style={{ 
                backgroundImage: "url('/images/coffee.webp')"
            }}
        >
            <h1 className="text-secondary text-5xl md:text-7xl font-bold mb-4 text-left">
                Ethiopian Coffee
            </h1>
            <p className="text-primary text-xl md:text-2xl max-w-md leading-relaxed tracking-wide text-left">
                Ethiopian coffee is celebrated for its rich flavors and cultural importance. As the origin of coffee, Ethiopia cultivates some of the finest Arabica beans, offering unique taste profiles cherished worldwide.
            </p>
        </div>
    );
}
