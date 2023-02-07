import Image from "next/image";
import adidas from '/public/images/adidas.png'
import nike from '/public/images/nike.png'
import puma from '/public/images/puma.png'
import reebok from '/public/images/reebok.png'


const Brand = () => {
    return (
        <div className="">
            <div className="text-black text-base mb-3 mt-12">
                Brands:
            </div>
            <div className="flex items-center pb-10">
                <Image alt="nike" src={nike} className="w-11 lg:w-14 mr-6 lg:mr-12" />
                <Image alt="adidas" src={adidas} className="w-10 lg:w-14 mr-6 lg:mr-12" />
                <Image alt="puma" src={puma} className="w-16 lg:w-20 mr-6 lg:mr-12" />
                <Image alt="reebok" src={reebok} className="w-24 lg:w-28 mr-6 lg:mr-12" />
            </div>
        </div>
    );
};

export default Brand;