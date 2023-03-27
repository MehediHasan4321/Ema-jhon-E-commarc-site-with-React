import React from 'react';

const Banner = () => {
    return (
        <div className='h-[40vh] bg-purple-200 mt-16'>
            <div className='container mx-auto flex items-center h-full'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-semibold'>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button className=' bg-amber-400 px-4 py-2 rounded-md text-white text-lg'>Shop More</button>
                </div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Banner;