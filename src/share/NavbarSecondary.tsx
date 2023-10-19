"use client"

import { useEffect, useState } from 'react';
import { IconBallVolleyball } from '@tabler/icons-react';
import '../styles/Home.css'
import Link from 'next/link';
import { dropdownHome, homeRoute } from '@/constants/routes';
import { getUserInfo, isLoggedIn } from '@/service/auth.service';
import { IconUserSquareRounded, IconLogin, IconSearch } from '@tabler/icons-react';
import SideBarModule from '@/modules/SideBarModule';
import Wishlist from '@/modules/Wishlist';
import LogOutModule from '@/modules/LogOutModule';
import { useUserQuery } from '@/redux/api/userApi';
import ProfileImg from '@/components/ui/ProfileImg';


const NavbarSecondary = () => {
    const isLogin = isLoggedIn()
    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const [stickyClass, setStickyClass] = useState("0");
    const [logout, setLogout] = useState<any>(null);
    const me = {
        firstName: "Rohul",
        lastName: "Amin",
        imageURL: false

    }

    const { data, isLoading } = useUserQuery(id)
    // console.log(isLoggedIn(), data, id, "okkk")

    function stickNavbar() {
        let windowHeight = window.scrollY;
        windowHeight >= 100 ? setStickyClass("sticky-nav") : setStickyClass("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);


    return (

        <div style={{ padding: "5px" }} className={`${stickyClass} z-[9999999] fixed bgGradient border-2 border-x-0 border-[#6131a1a9] w-full `}>
            <div style={{ maxWidth: "1280px" }} className={`w-full py-1 mx-auto flex justify-between items-center w-7xl duration-300  px-2 text-white`}>

                <div className='flex items-center justify-between'>
                    <div className="flex cursor-pointer items-center gap-x-2 text-18 md:text-[22px] font-extrabold font-Oswald">
                        <span className='text2'><IconBallVolleyball size={28} /></span>
                        <span className='text2'>Sportalize</span>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex font-Oswald justify-center items-center'>

                        {
                            homeRoute?.map((item: any, index: number) => (
                                <li style={{ marginRight: "10px" }} key={index} className='mx-2'>
                                    <Link href={item?.path} className='flex items-center'>
                                        <span style={{ marginRight: "5px" }} className='font-Oswald text-[10px] text-white'>{item?.icon}</span>
                                        <span className='font-Oswald text2 text-[18px]'>{item?.name}</span>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="flex items-center mr-2 gap-x-4">
                    <Wishlist />
                    <div className='md:hidden flex items-center gap-2'>
                        <SideBarModule />
                    </div>
                    {
                        isLogin ? (
                            <ProfileImg setLogout={setLogout} routes={dropdownHome} />
                        )
                            : (
                                <div className='hidden md:block ml-2'>
                                    <div className='flex items-center'>
                                        <div className='flex items-center'>
                                            <Link href='login' className='flex items-center'>
                                                <span style={{ marginRight: "5px" }} className='font-Oswald text-[10px] text-white'><IconLogin /></span>
                                                <span className='font-Oswald text2 text-[18px]'>SignIn</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                    }

                </div>
            </div>
            {logout && <LogOutModule setLogout={setLogout} />}
        </div>
    );
};

export default NavbarSecondary;