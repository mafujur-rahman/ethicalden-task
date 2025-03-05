import React from 'react';
import './rotateImage.css'
import { TiArrowRightThick } from 'react-icons/ti';

const CreativeStudio = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main Heading */}
                <p className='text-xl ml-8 mb-8 text-gray-900'>(  Our Approach  )</p>
                <h1 className="text-5xl font-bold text-gray-900 mb-4 flex gap-5 items-center">
                    Creative <img className='rotate-image' style={{ width: "30px", height: "30px", text: "gray-100" }} src="/ab-shape-img.webp" alt="" />
                </h1>

                <h1 className='text-5xl font-bold text-gray-900 mb-12'>development studio</h1>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Product Design Section */}
                <div className="mb-12 flex justify-evenly">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Product design</h2>
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Once we have an idea of your needs, a research and design process <br /> begins to gain deep knowledge about the business, users <br /> and world content.
                        </p>
                        <div className="flex space-x-4">
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">RESEARCH</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">U/LUX</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">PROTOTYPING</span>
                        </div>
                    </div>
                    <button className='border border-gray-300 rounded-full p-3'>See <br /> details <br /> <TiArrowRightThick /></button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Web/Mobile Section */}
                <div className="mb-12 flex justify-evenly">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Web/Mobile</h2>
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Once we have an idea of your needs, a research and design process <br /> begins to gain deep knowledge about the business, users <br /> and world content.
                        </p>
                        <div className="flex space-x-4">
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">SED</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">CREATIVE DEVELOPMENT</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">WIDEL</span>
                        </div>
                    </div>
                    <button className='border border-gray-300 rounded-full p-3'>See <br /> details <br /> <TiArrowRightThick /></button>
                </div>

                {/* Divider */}
                <hr className="my-12 border-gray-200" />

                {/* Consulting Section */}
                <div className='flex justify-evenly'>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Consulting</h2>
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Once we have an idea of your needs, a research and design process <br /> begins to gain deep knowledge about the business, users <br /> and world content.
                        </p>
                        <div className="flex space-x-4">
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">CREATIVE</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">DIGITAL STRATEGY</span>
                            <span className="text-sm font-medium border border-gray-300 rounded-3xl p-3 cursor-pointer text-gray-500">MVP</span>
                        </div>
                    </div>
                    <button className='border border-gray-300 rounded-full p-3'>See <br /> details <br /> <TiArrowRightThick /></button>
                </div>

                {/* Divider */}
            <hr className="my-12 border-gray-200" />
            </div>
        </div>
    );
};

export default CreativeStudio;