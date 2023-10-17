"use client"
import UserProfileImg from '../ui/UserProfileImg';
import { getUserInfo } from '@/service/auth.service';
import { useUserQuery } from '@/redux/api/userApi';
import InfoField from './InfoField';
import Link from 'next/link';
import { IconUserSquareRounded } from '@tabler/icons-react';

const ProfileBanner = () => {

    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const { data, isLoading } = useUserQuery(id)

    return (
        <div>
            <div className='banner-home-bg overflow-hidden rounded-b-[60px] pb-5  md:rounded-b-[100px]'>
                <div className='bg-search-box backdrop-blur-sm pt-8 p-4'>
                    <UserProfileImg
                        className={'w-[100px]  h-[100px] md:w-[150px] bgGradient md:h-[150px] mx-auto ring-purple-700 ring-[6px] ring-offset-base-100 ring-offset-[3px]'}
                        textColor={'text-white text-[40px] sm:text-[60px] font-reem text2 font-bold font-reem'}
                        me={data}
                    />
                    <div className='text-center my-4'>
                        <span
                            className="text-[24px] font-extrabold py-4 font-all pt-4 sm:mb-5 md:mt-2 sm:text-[28] md:text-[36px] text2 "
                        >
                            {data?.firstName} {data?.lastName}
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-[#6124f079] backdrop-blur-xl p-2 sm:p-4 sm:mx-4 mx-2 -mt-[40px] sm:-mt[60px] rounded-xl'>
                <div className='flex sm:mb-4 mb-2 item-center justify-between w-full gap-x-2 md:gap-x-3'>

                    <div className='w-full'>
                        <Link href='/profile/update-profile' className="flex gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                            <span className='text-white hidden sm:block'> <IconUserSquareRounded size={24} /> </span>
                            <span className="text2">Update Profile</span>
                        </Link>
                    </div>
                    <div className='w-full'>
                        <Link href='/profile/update-profile' className="flex gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                            <span className='text-white hidden sm:block'> <IconUserSquareRounded size={24} /> </span>
                            <span className="text2">Change Password</span>
                        </Link>
                    </div>

                </div>
                <InfoField name={"Full Name"} value={`${data?.firstName}  ${data?.lastName}`} />
                <InfoField name={"Email :"} value={data?.email} />
                <InfoField name={"Address :"} value={data?.address} />
                <InfoField name={"Gender :"} value={data?.gender} />
                <InfoField name={"contact No :"} value={data?.contactNo} />
                <InfoField name={"Role :"} value={data?.role} />
                <InfoField name={"Date of birth :"} value={data?.dateOfBirth} />
            </div>
        </div>
    );
};

export default ProfileBanner;