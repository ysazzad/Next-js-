import Image from 'next/image';
import React from 'react';
import pose from '/public/images/pose.png'
import arrow from '/public/images/ArrowRight.png'
import arrow2 from '/public/images/arrow2.png'
import arrow3 from '/public/images/arrow3.png'



const Card = () => {
    return (
        <div className='bg-blue mx-5 lg:mx-28 p-5 lg:p-20 flex flex-col lg:flex-row lg:my-16 rounded-3xl'>
            <div className='flex my-4'>
                <div className='w-20 h-20 lg:w-24 lg:h-24 bg-white-blur flex justify-center items-center rounded-2xl'>
                    <Image src={pose} alt="workoutSvg1" className="" />
                </div>
                <div className='ml-8'>
                    <h1 className='text-base lg:text-xl text-white'>Get that 11 line <br /> in 30 days</h1>
                    <button className='flex items-center text-gray-300 mt-1 lg:mt-4'>Learn more <Image src={arrow} className="w-4 h-4 ml-5 " /> </button>
                </div>
            </div>
            <div className='flex my-4 lg:ml-20'>
                <div className='w-20 h-20 lg:w-24 lg:h-24 bg-white-blur flex justify-center items-center rounded-2xl'>
                    <Image src={arrow3} alt="workoutSvg2" className="" />
                </div>
                <div className='ml-8'>
                    <h1 className='text-base lg:text-xl text-white'>14 Days <br /> sherd challenge</h1>
                    <button className='flex items-center text-gray-300 mt-1 lg:mt-4'>Learn more <Image src={arrow} className="w-4 h-4 ml-5 " /> </button>
                </div>
            </div>
            <div className='flex my-4 lg:ml-20'>
                <div className='w-20 h-20 lg:w-24 lg:h-24 bg-white-blur flex justify-center items-center rounded-2xl'>
                    <Image src={arrow2} alt="workoutSvg3" />
                </div>
                <div className='ml-8'>
                    <h1 className='text-base lg:text-xl text-white'>Get flat belly <br />  in 30 days</h1>
                    <button className='flex items-center text-gray-300 mt-1 lg:mt-4'>Learn more <Image src={arrow} className="w-4 h-4 ml-5 " /> </button>
                </div>
            </div>

        </div>
    );
};

export default Card;