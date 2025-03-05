import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                {/* Website Map */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Website map</h3>
                    <ul className="grid grid-cols-2 text-gray-300">
                        <li><a href="#home" className="hover:underline">Home</a></li>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#landing" className="hover:underline">Landing</a></li>
                        <li><a href="#blog" className="hover:underline">Blog</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                    {/* Newsletter Section */}
                    <div className="mb-8 md:mb-0 mt-10">
                        <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                        <input
                            type="email"
                            placeholder="Enter Address..."
                            className="bg-gray-800 border border-gray-600 rounded py-2 px-4 placeholder-gray-400"
                        />
                        <button className="bg-white text-black rounded-full p-2 ml-2">
                            <span><TiArrowRightThick /></span>
                        </button>
                    </div>
                </div>



                {/* Center Text */}
                <div className="flex-grow text-center mb-8 md:mb-0">
                    <p className="mb-4">Drop us a line sed id semper risus in hendrerit.</p>
                    <h1 className="text-3xl font-bold py-16">Liko.</h1>
                    <p>&copy; 2025 Themepure. <br /> All rights reserved</p>
                </div>

                {/* Contact Information */}
                <div className="mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">Contact</h3>
                    <p className="mb-2">740 NEW SOUTH HEAD RD, DOUBLE BAY  SYD, NEW YORK</p>
                    <p className="mb-2">P: +725 214 456</p>
                    <p>E: contact@liko.com</p>

                    <div className=" mt-10">
                        <div className="">
                            <h3 className="text-lg font-bold mb-2">Follow</h3>
                            <ul className="flex gap-5">
                                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl"><FaTwitter /></li>
                                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl"><FaFacebook /></li>
                                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl"><FaInstagram /></li>
                                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl"><FaLinkedin /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;