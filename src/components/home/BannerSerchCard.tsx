

import { bookingCategory } from '@/constants/bookingCategory';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import { IconCaretLeft, IconCaretDown, IconMapPinSearch } from '@tabler/icons-react';



const BannerSerchCard = () => {

    const [category, setCategory] = useState<any>(bookingCategory[0])
    const [open, setClose] = useState<boolean>(true)
    const containerRef = useRef();


    const handleSelect = (item: any, i: boolean) => {
        setCategory(item)
        setClose(!open)
    }


    return (
        <div>
            <div className="order-1 pb-5">
                <div className="bg-search-box shadow-2xl font-reem shadow-[#dfd8eca1] w-[300px]  md:w-[500px] p-5 rounded-xl border-[3px] border-[#dfcff354]">

                    <div className=' w-full'>
                        <div onClick={() => setClose(!open)} className="relative cursor-pointer flex items-center text2 font-extrabold text-xl rounded-none border-2 px-2 border-dashed border-[#fff] bg-transparent input-md outline-none w-full">
                            <div className='flex items-center justify-center w-full'>
                                <div className='flex items-center text-xl w-full'>
                                    <span className='text-[#d5bbee] text-[26px]'>
                                        {category?.value}
                                    </span>
                                    <span className='text2 border-l border-[#d0bbf18f] ml-2 pl-3'>
                                        {category.label}
                                    </span>
                                </div>
                                <span className='text-[#e1aef5] text-24'>{open ? <IconCaretLeft /> : <IconCaretDown />}</span>
                            </div>
                            <div className='absolute top-12 z-[10000] shadow-md shadow-[#41456da1] border  border-[#8741c06e] bg-[#1a2ab8e7] left-0 w-full'>
                                {bookingCategory.map((item, index) => (
                                    <div className='' key={index}>
                                        <div
                                            onClick={() => handleSelect(item, open)}
                                            className={`${category.label === item.label ? "bg-[#ffffff23]" : ""}
                                            ${open ? "!hidden" : "flex"}
                                            flex hover:bg-[#ffffff23] cursor-pointer duration-300 items-center p-2 px-3 text-lg`}>
                                            <span className='text-[#e1caf7] text-[24px]'>
                                                {item?.value}
                                            </span>
                                            <span className='text2 border-l border-[#cab2f18f] ml-2 pl-3'>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder="Insert a Location or Venue"
                            required
                            className=" text2 mt-3 pl-14 font-extrabold text-xl rounded-none border-2 px-2 border-dashed border-white  bg-transparent input-md outline-none w-full"
                        />
                        <span className='absolute top-[24px] pr-2 left-3 border-r border-[#d0bbf18f] text-[#e1caf7]'><IconMapPinSearch /></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BannerSerchCard;