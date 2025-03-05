import { TiArrowRightThick } from "react-icons/ti";

export default function HeroSection() {
    return (
        <section className="text-center px-5 lg:px-20 mt-6 py-20 relative grid  ">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-green-300 to-red-300 blur-3xl opacity-20 "></div>

            {/* Hero Content */}
            <h2 className="text-6xl lg:text-8xl font-bold">
                We're a high-end <br /> digital agency
            </h2>

            <p className="mt-8 text-lg text-gray-600">
                UX/UI DESIGN / MOTION DESIGN / BRANDING / DEVELOPMENT
            </p>

            <div className="mt-8 text-center justify-center">
                <button className="px-8 py-3 bg-black text-white rounded-full text-lg shadow-lg hover:bg-gray-900 transition-all justify-center flex items-center">
                    Say Hello
                    <p className="bg-white p-2 ml-2 rounded-full border-opacity-50 text-black"><TiArrowRightThick /></p>
                </button>
            </div>
        </section>
    );
}
