"use client"

import { useFeedbacksQuery } from '@/redux/api/feedbackApii';
import React from 'react';
import UserProfileImg from '../ui/UserProfileImg';
import Marquee from 'react-fast-marquee';

const Review = () => {
    const { data, isLoading } = useFeedbacksQuery({})
    console.log(data, "data ase nai")
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mb-5'>
                <h1
                    className="text-[28px] text-center font-Oswald font-extrabold py-2 mt-5 font-all pt-2 sm:mb-5 sm:text-4xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    USER REVIEW
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
                className="w-full text-[15px] "
                gradientWidth={80}
                pauseOnHover={true}
                gradientColor={"gradientColor"}
                speed={24}
            >
                <div className='flex justify-between mt-28 mb-10 items-center py-5'>
                    {
                        data?.slice(0, 5)?.reverse()?.map((item: any, index: number) => (
                            <div key={index} className='mx-3 max-w-[500px] '>
                                <div className='border-2 relative border-dashed p-1 rounded-br-[60px] rounded-tl-[60px]  border-[#914aeec4]'>
                                    <div className='absolute -top-[30px] left-0 flex items-center justify-center w-full'>
                                        <UserProfileImg
                                            className={'w-[60px] bg-[#4c10bd] h-[60px] ring-purple-700 ring-offset-base-100 ring-offset-2'}
                                            textColor={'text-white text-[28px] font-bold font-reem'}
                                            me={item?.user}
                                        />
                                    </div>
                                    <div className='bg-[#5d1dd33d] p-4 px-8 rounded-br-[60px] h-[200px] rounded-tl-[60px] '>
                                        <h1 className='text2 text-center mt-2 text-xl font-bold font-reem py-4'>
                                            <span>{item?.user?.firstName} {item?.user?.lastName}</span>
                                        </h1>
                                        <div className='pb-4 pt-3'>
                                            <h1 className='text2 text-center font-bold font-reem '>{item?.description?.slice(0, 150)}</h1>
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

export default Review;