import Image from 'next/image';
import Brand from '../Brand/Brand';
import hero from '/public/images/hero.png'
import circleArrow from '/public/images/circlearrow.png'
import playCircle from '/public/images/PlayCircle.png'
const Banner = () => {
    return (
        <div>
            <div className='lg:flex lg:justify-between pl-3 lg:pl-28 mt-16 lg:mt-24 '>
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold font-mono tracking-wide leading-6">Healthy in side</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold font-mono tracking-wide leading-loose"> <span className='text-blue'>fresh</span> out side</h1>
                    <p className="py-6 text-xs lg:text-base text-gray-400 leading-5 lg:leading-7">Exercise is a very important need for our body.
                        Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run
                        a healthy routine.</p>
                    <div className='flex '>
                        <button className="btn bg-light-blue  border-none text-xs lg:text-base normal-case shadow-2xl">
                            Get Started
                            <Image alt='circleArrow' src={circleArrow} className="ml-12 lg:ml-20 " />
                        </button>
                        <button className=" ml-5 lg:ml-9 btn bg-white text-xs lg:text-base text-light-blue border-none normal-case shadow-2xl">
                            <Image alt='playCircle' src={playCircle} className=" " />
                            Learn more
                        </button>
                    </div>
                    <Brand></Brand>
                </div>
                <div>
                    <Image alt='heroPicture' src={hero} />
                </div>
            </div>
        </div>
    );
};

export default Banner;