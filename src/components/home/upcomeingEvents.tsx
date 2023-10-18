"use client"

import { upcomingEvensData } from '@/constants/upcomeIngEventsData';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const UpcomeingEvents = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mb-5'>
                <h1
                    className="text-[28px] text-center font-Oswald font-extrabold py-2 mt-5 font-all pt-2 sm:mb-5 sm:text-4xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    UPCOMING EVENTS
                </h1>
                <p
                    className=" font-Oswald text-center font-bold sm:text-xl md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e6a9f5] lg:my-4 "
                    data-aos="zoom-in-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                >
                    Find sports facilities from football pitches to tennis courts in a range of cities across the UK and Ireland
                </p>

            </div>
            <Marquee
                className="rounded-md text-purple-700 w-full text-[15px] mt-10  md:text-[24px] font-bold"
                gradientWidth={80}
                pauseOnHover={true}
                gradientColor={"gradientColor"}
                speed={24}
            >
                <div className='flex items-center justify-center gap-x-5'>
                    {
                        upcomingEvensData && upcomingEvensData?.map((item: any, index: number) => (
                            <div key={index} className='flex font-Oswald max-w-[300px] items-center justify-center mx-2'>
                                <div className='booking-card rounded-xl p-4 bg-[#5d1dd33d] backdrop-blur-sm  font-reem border-[3px] border-[#570ab631] duration-200 hover:-translate-y-1'>
                                    <div className="rounded-lg overflow-hidden relative min-h-[200px]">
                                        <Image src={item?.img} className='rounded-md hover:scale-[1.1] duration-500 h-[200px]' width={1000} alt="" />
                                        <div className="overly-card flex items-center justify-center text-center rounded-lg bg-search-box duration-500 absolute top-0 left-0 w-full h-full ">
                                            <div className="mt-5 my-2">
                                                <h5 className='text-purple-700 text-2xl mb-5 font-bold text2'>{item?.label}</h5>
                                                <p className='text-sm text2'>{item?.dsc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default UpcomeingEvents;