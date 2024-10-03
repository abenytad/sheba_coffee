import { FaPencilAlt, FaPaintBrush, FaClipboardList } from 'react-icons/fa';

export default function ServicesComponent() {
    return (
        <div className="w-full py-8 bg-gray-100 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
                Our Services and Specialties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-screen-xl px-4">
                {/* Service 1 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <FaPencilAlt className="text-primary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Creative Design</h3>
                    <p className="text-center text-gray-600 text-sm md:text-base">
                        We provide innovative design solutions tailored to your needs.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <FaPaintBrush className="text-primary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Artistic Illustration</h3>
                    <p className="text-center text-gray-600 text-sm md:text-base">
                        Our illustrations bring your ideas to life with creativity and flair.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <FaClipboardList className="text-primary text-5xl md:text-6xl mb-4" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">Project Management</h3>
                    <p className="text-center text-gray-600 text-sm md:text-base">
                        Efficient management of your projects from start to finish.
                    </p>
                </div>
            </div>
        </div>
    );
}
