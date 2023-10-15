import { bookingCategory } from '@/constants/bookingCategory';
import React from 'react';
import Marquee from 'react-fast-marquee';

const CategorySports = () => {
    return (
        <Marquee
            className="rounded-md text-purple-700 w-full max-w-[600px] text-[15px]  md:text-[24px] font-bold"
            gradientWidth={80}
            pauseOnHover={true}
            gradientColor={"gradientColor"}
            speed={20}
        >
            <div className='flex items-center justify-center gap-x-5'>
                {
                    bookingCategory?.map((item, index) => (
                        <div key={index} className='flex font-Oswald items-center justify-center gap-x-2'>
                            <span className='text-[28px] font-extrabold text-[#c999f7]'>{item?.value}</span>
                            <span className='text2 text-xl font-extrabold'>{item?.label}</span>
                        </div>
                    ))
                }
            </div>
        </Marquee>

    );
};

export default CategorySports;