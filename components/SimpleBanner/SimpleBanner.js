import React from 'react';

const SimpleBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row pl-6 pr-6 lg:pl-28 lg:pr-20 my-14 lg:my-20'>
            <div className='lg:w-1/2 '>
                <h1 className="text-2xl lg:text-5xl font-bold font-mono tracking-wide leading-6">Healthy in side</h1>
                <h1 className="text-2xl lg:text-5xl font-bold font-mono tracking-wide leading-loose">fresh out side</h1>
            </div>
            <div className='lg:w-1/2'>
                <p className=' text-xs lg:text-base text-gray-400 leading-5 lg:leading-7'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
            </div>

        </div>
    );
};

export default SimpleBanner;