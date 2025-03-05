import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import './brandsSlider.css'
import './rotateImage.css'

const WhatWeDo = () => {

    
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 ml-5">(  WHAT WE DO  )</h2>
                <p className="text-6xl text-gray-700 font-bold mb-8">
                    We tell visual stories <br /> through smooth motions
                </p>
                <div className='flex pt-8'>
                    <div className='flex-1 flex justify-center  items-center rotate-image'><img src="/public/ab-shape-img.webp" alt="" /></div>
                    <div className='flex-1'>
                        <p className='text-gray-600'>We are a creative design studio based in <br /> London. We specialize in Branding, and <br /> Web experiences for beauty. <br />

                            <br />  we’re all about digital experiences. The <br /> most creative idea and the most perfect <br /> execution mean nothing.</p>
                        <div className="mt-8 text-center justify-center">
                            <button className="px-8 py-3 bg-black text-white rounded-full text-lg shadow-lg hover:bg-gray-900 transition-all justify-center flex items-center">
                                About Us
                                <p className="bg-white p-2 ml-2 rounded-full border-opacity-50 text-black"><TiArrowRightThick /></p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* brands img */}
                <div className="slider-container mt-10">
                    {/* Image slider */}
                    <div className="image-slider">
                        <img src="/public/brand-1.webp" alt="brand-1" />
                        <img src="/public/brand-2.webp" alt="brand-2" />
                        <img src="/public/brand-3.webp" alt="brand-3" />
                        <img src="/public/brand-4.webp" alt="brand-4" />
                        <img src="/public/brand-5.webp" alt="brand-5" />
                        <img src="/public/brand-6.webp" alt="brand-6" />
                        <img src="/public/brand-7.webp" alt="brand-7" />
                        <img src="/public/brand-1.webp" alt="brand-1" />
                        <img src="/public/brand-2.webp" alt="brand-2" />
                        <img src="/public/brand-3.webp" alt="brand-3" />
                        <img src="/public/brand-4.webp" alt="brand-4" />
                        <img src="/public/brand-5.webp" alt="brand-5" />
                        <img src="/public/brand-6.webp" alt="brand-6" />
                        <img src="/public/brand-7.webp" alt="brand-7" />
                        <img src="/public/brand-1.webp" alt="brand-1" />
                        <img src="/public/brand-2.webp" alt="brand-2" />
                        <img src="/public/brand-3.webp" alt="brand-3" />
                        <img src="/public/brand-4.webp" alt="brand-4" />
                        <img src="/public/brand-5.webp" alt="brand-5" />
                        <img src="/public/brand-6.webp" alt="brand-6" />
                        <img src="/public/brand-7.webp" alt="brand-7" />
                        <img src="/public/brand-1.webp" alt="brand-1" />
                        <img src="/public/brand-2.webp" alt="brand-2" />
                        <img src="/public/brand-3.webp" alt="brand-3" />
                        <img src="/public/brand-4.webp" alt="brand-4" />
                        <img src="/public/brand-5.webp" alt="brand-5" />
                        <img src="/public/brand-6.webp" alt="brand-6" />
                        <img src="/public/brand-7.webp" alt="brand-7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;