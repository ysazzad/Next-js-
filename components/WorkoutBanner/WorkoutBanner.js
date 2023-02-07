import Image from 'next/image';
import React from 'react';
import banner from '/public/images/banner.png'
import arrow from '/public/images/ArrowRight.png'

const WorkoutBanner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex lg:flex-row lg:justify-between mt-16 lg:mt-24'>
            <Image src={banner} alt="burn fat" />
            <div className=' ml-3 lg:w-2/5 lg:mt-16 lg:pr-9'>
                <h1 className=" text-3xl lg:text-5xl font-bold font-mono">Best full body workout to lose fat</h1>
                <p className="py-6 text-xs lg:text-base text-gray-400 leading-5 lg:leading-7">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <button className="btn bg-light-blue text-xs lg:text-base normal-case mb-14">Get Started
                    <Image src={arrow} alt="arrowButton" className=" ml-12 lg:ml-20 " />
                </button>
            </div>

        </div>
    );
};

export default WorkoutBanner;