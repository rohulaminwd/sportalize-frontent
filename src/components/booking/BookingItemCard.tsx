"use client"

import ModuleModule from '@/modules/DeleteModul';
import { IconEdit, IconTrash, IconListDetails } from '@tabler/icons-react';
import { Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BookingItemCard = ({ item }: any) => {
    const [deleteItem, setDeleteItem] = useState<any>()
    return (
        <div>
            <div className='bg-[#5e33d434] text-[#d1b4f7] rounded-lg my-2 border-2 p-1 duration-300 hover:border-[#6944f1] border-[#8f62fa60] flex items-center justify-between'>
                <div className='flex gap-x-3 items-center'>
                    <div className='w-[80px] h-[80] rounded-lg overflow-hidden'>
                        <Image src={item?.img} className='w-full h-full' width={1000} height={1000} alt='image' />
                    </div>
                    <h3 className=''>
                        <p
                            className="text-[20px] inline-block font-bold font-all sm:text-[18] md:text-[24px] text2 "
                        >
                            {item?.title}
                        </p>
                        <p
                            className="text-[12px] font-bold font-all sm:text-[18] md:text-[16px] text2 "
                        >
                            {item?.location}
                        </p>
                    </h3>
                </div>
                <div className='flex items-end h-full'>
                    <Tooltip placement="top" color='#593dbe' title={"Details"}>
                        <Link href={`/manage-booking/details/${item?.id}`} className='hover:text-[#e9d2fd] text-[#a995f1f3] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span className=''><IconListDetails /></span>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="top" color='#593dbe' title={"update Item"}>
                        <Link href={`/manage-booking/edite/${item?.id}`} className='text-[#a995f1f3] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span><IconEdit /></span>
                        </Link>
                    </Tooltip>
                    <Tooltip placement="top" color='#ec4242' title={"delete item"}>
                        <label htmlFor='delete-module' onClick={() => setDeleteItem([item, "bookingItems"])} className='text-[#802323] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span><IconTrash /></span>
                        </label>
                    </Tooltip>
                </div>
            </div>
            {deleteItem && <ModuleModule deleteItem={deleteItem} setDeleteItem={setDeleteItem} />}
        </div>
    );
};

export default BookingItemCard;