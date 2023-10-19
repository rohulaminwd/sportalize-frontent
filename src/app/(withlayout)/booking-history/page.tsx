"use client"

import { useBookingsQuery } from '@/redux/api/bookingApi';
import { IconTrash } from '@tabler/icons-react';
import { Tooltip } from 'antd';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    const { data, isLoading } = useBookingsQuery({})

    console.log(data, "okkkk")

    const handleDelete = (item: "any") => {
        console.log("djfdfjd")
    }

    const handleCance = (item: "any") => {
        console.log("djfdfjd")
    }
    return (
        <div>
            <div>
                <h3 className='text-xl font-bold font-Oswald mt-3'>My Order History </h3>
            </div>
            <div>
                {
                    data?.map((item: any, index: number) => (
                        <div key={index}>
                            <div className='bg-[#5e33d434] text-[#d1b4f7] rounded-lg my-2 border-2 p-1 duration-300 hover:border-[#6944f1] border-[#8f62fa60] flex items-center justify-between'>
                                <div className='flex gap-x-3 items-center'>
                                    <div className='w-[80px] h-[80] rounded-lg overflow-hidden'>
                                        <Image src={item?.bookingItem?.img} className='w-full h-full' width={1000} height={1000} alt='image' />
                                    </div>
                                    <h3 className=''>
                                        <p
                                            className="text-[20px] inline-block font-bold font-all sm:text-[18] md:text-[24px] text2 "
                                        >
                                            {item?.bookingItem?.title}
                                        </p>
                                        <p
                                            className="text-[12px] font-bold font-all sm:text-[18] md:text-[16px] text2 "
                                        >
                                            {item?.bookingItem?.location}
                                        </p>
                                    </h3>
                                </div>
                                <p
                                    className="text-[12px] font-bold font-all sm:text-[18] md:text-[16px] text2 "
                                >
                                    {item?.status}
                                </p>
                                <div className='flex items-end h-full'>
                                    <Tooltip placement="top" color='#ec4242' title={"Cancel item"}>
                                        <button onClick={() => handleCance(item)} className='text-[#802323] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                                            <span className='text-red-500'>Cancel</span>
                                        </button>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Page;