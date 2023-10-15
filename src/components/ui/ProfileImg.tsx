
import React from 'react';
import UserProfileImg from './UserProfileImg';
import { useUserQuery } from '@/redux/api/userApi';
import { getUserInfo, isLoggedIn } from '@/service/auth.service';
import { IconLogout } from '@tabler/icons-react';
import Link from 'next/link';

const ProfileImg = ({ setLogout, routes }: any) => {
    const userInfo: any = getUserInfo()
    const isLogin = isLoggedIn()
    const id = userInfo ? userInfo?.userId : ''
    const { data, isLoading } = useUserQuery(id)

    return (
        <div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                    <div style={{ width: "40px", height: "40px" }} className="">
                        {
                            (data || isLogin) && (
                                <UserProfileImg
                                    className={'w-[40px] h-[40px] ring-purple-700 ring-offset-base-100 ring-offset-2'}
                                    textColor={'text-white text-[20px] font-bold font-reem'}
                                    me={data}
                                />
                            )
                        }
                    </div>
                </label>
                <ul tabIndex={0} style={{ color: "#fff", background: "#5b34c7ec" }} className="mt-3 z-[1] p-3 pt-5 shadow menu menu-sm dropdown-content gradient1 rounded-box w-52">
                    <div className='w-full flex justify-center'>
                        <UserProfileImg
                            className={'w-[60px] h-[60px] ring-purple-700 ring-offset-base-100 ring-offset-2'}
                            textColor={'text-white text-[28px] font-bold font-reem'}
                            me={data}
                        />
                    </div>
                    <p className='font-bold text-center text-xl mt-2 text bg-gradient-to-r from-white to-purple-600'>{data?.firstName} {data?.lastName}</p>
                    <ul className='mt-5'>

                        {
                            routes?.map((item: any, index: number) => (
                                <li key={index}>
                                    <Link href={item?.path} className='hover:text-purple-200 text-white flex items-center gap-x-2'>
                                        <span className='!text-sm'>{item?.icon}</span>
                                        <span>{item?.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                        <li className='cursor-pointer mt-2'>
                            <a className='hover:text-red-500 text-white'>
                                <label htmlFor="Logout-modal" className='cursor-pointer  flex items-center' onClick={() => setLogout("done")}>
                                    <span className='mr-2'><IconLogout /></span>
                                    <span className='mr-2'>logout</span>
                                </label>
                            </a>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};

export default ProfileImg;