import React from 'react';
import { TiArrowRightThick } from 'react-icons/ti';
import CreativeProject from './CreativeProjects';
import CreativeProjects2 from './CreativeProjects2';
import CreativeProjects3 from './CreativeProjects3';
import CreativeProjects4 from './CreativeProjects4';

const LatestProjects = () => {
    return (
        <div className='bg-[#1E1E1E] w-full'>

            <div className='grid justify-center pt-16'>
                <div className='text-white flex gap-5 items-center'>
                    <h1 className='text-9xl'>Latest</h1>
                    <button className='bg-white text-black rounded-full p-3'>
                    See <br /> All Projects <br /> <TiArrowRightThick />
                    </button>
                </div>
                <h1 className='text-white text-9xl ml-16'>Projects</h1>
            </div>

            <CreativeProject />
            <CreativeProjects2 />
            <CreativeProjects3 />
            <CreativeProjects4 />
        </div>
    );
};

export default LatestProjects;