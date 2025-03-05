import { TiArrowRightThick } from 'react-icons/ti';
import './rotateImage.css'

const TalkSection = () => {
    return (
        <div className="bg-[#1E1E1E] text-white py-16 px-8 text-center flex justify-center w-full">
            <div>
                {/* Main heading */}
                <h1 className="text-8xl font-bold text-white mb-4 flex gap-5 items-center">
                    Let's Talk <img
                        className="rotate-image"
                        style={{ width: "30px", height: "30px", filter: "brightness(0) invert(1)" }}
                        src="/ab-shape-img.webp"
                        alt=""
                    />

                </h1>

                <div className='flex pt-5 gap-12 text-start'>
                    <button className='bg-white text-black p-8 rounded-full'>Get <br /> in Touch <br /> <TiArrowRightThick /></button>
                    <div className='flex-1'>
                        <h1 className='text-8xl font-bold text-white mb-4' > about it</h1>
                        <p className="mt-4">
                            We will collaborate to find the right answer and bring progress <br /> to your business and to the world.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TalkSection;