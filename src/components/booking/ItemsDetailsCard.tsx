import { IconHeartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ItemsDetailsCard = ({ item }: any) => {

    return (
        <div>
            <div className="p-3" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                <div className='booking-card rounded-xl h-full p-4 bg-[#5d1dd33d] backdrop-blur-sm  font-reem border-[3px] border-[#570ab631] duration-200 hover:-translate-y-1'>
                    <div className="rounded-lg overflow-hidden relative min-h-[200px]">
                        <div className="overly-card rounded-lg bg-search-box duration-500 absolute top-0 left-0 w-full h-full "></div>
                        <Image src={item?.img} height={1000} className='rounded-md hover:scale-[1.1] duration-500 h-[200px]' width={1000} alt="" />
                    </div>
                    <div className="flex mt-5 items-center my-2 justify-between">
                        <h5 className='text-purple-700 text-xl font-bold text2'>{item?.title}</h5>
                        <span className='text-[#e5cefa] font-bold text-24 '><IconHeartPlus /></span>
                    </div>
                    <div className="mt-2 font-all">
                        <p className='text-sm text2'>{item?.description}</p>
                        <Link href={`item-details/${item?.id}`} className='btn-sm mt-5 font-reem btn w-full bg-search-box bg-[#b393ee] hover:bg-purple-600 border-0 text-white'>See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsDetailsCard;