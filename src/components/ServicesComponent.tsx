import { GiCoffeeBeans, GiCoffeePot } from 'react-icons/gi';
import { MdOutlineLocalCafe } from 'react-icons/md';

export default function ServicesComponent() {
    return (
        <div className="w-full py-8 bg-white flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Our Sheba Coffee
            </h2>
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-screen-xl px-4">
                {/* Service 1 */}
                <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"> 
                    <GiCoffeeBeans className="text-tertiary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center" style={{ height: '56px' }}>
                        Premium Ethiopian Coffee
                    </h3>
                    <p className="text-center text-black text-sm md:text-base" style={{ height: '72px' }}>
                        Offers a range of premium, single-origin Ethiopian coffee, sourced directly from the highlands of Ethiopia.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"> 
                    <GiCoffeePot className="text-tertiary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center" style={{ height: '56px' }}>
                        Luxury Coffee Experience
                    </h3>
                    <p className="text-center text-black text-sm md:text-base" style={{ height: '72px' }}>
                        Focused on delivering a luxurious coffee experience, whether through whole beans, ground coffee, or convenient coffee pods.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"> 
                    <MdOutlineLocalCafe className="text-tertiary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center" style={{ height: '56px' }}>
                        Excellence and Tradition
                    </h3>
                    <p className="text-center text-black text-sm md:text-base" style={{ height: '72px' }}>
                        Embodies the spirit of excellence, tradition, and cultural pride, rooted in the rich heritage of Ethiopian coffee cultivation.
                    </p>
                </div>
            </div>
        </div>
    );
}
