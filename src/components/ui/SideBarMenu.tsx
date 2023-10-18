"use client"


import { Tooltip } from 'antd';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';


const SideBarMenu = ({ items }: any) => {

    const [active, setActive] = useState<string>()
    const path = usePathname();
    return (
        <ul className='mt-5 px-1'>
            {
                items && items?.map((item: any, index: number) => (
                    <li className='my-2'
                        key={index}
                    >
                        <Link
                            href={item?.path}
                            onClick={() => setActive(item?.key)}

                            className={`
                            ${active === item?.key ? "bg-btn" : "bg-search-box"} 
                            ${path === item?.path ? "bg-btn" : "bg-search-box"}
                             flex px-2 py-1 duration-300 rounded-lg hover:border border-[#a894f188] items-center gap-x-2 text-xl text-[#d4bcfa]`}>
                            <span className='text-[#d9d1f5]'>{item?.icon}</span>
                            <span className='text2'>{item?.label}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default SideBarMenu;