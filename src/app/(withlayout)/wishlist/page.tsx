"use client"


import WishlistCart from '@/components/booking/WishlistCart';
import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import { useMyWishlistQuery } from '@/redux/api/wishlist';
import { getUserInfo } from '@/service/auth.service';
import React from 'react';

const Page = () => {
    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const { data, isLoading } = useMyWishlistQuery(id)

    return (
        <div>
            <h1 className='text-xl font-Oswald text-white text-center mt-5'>Your Favorite List</h1>
            <div className='mt-8'>
                {
                    data?.map((item: any, index: number) => (
                        <div key={index}>
                            <WishlistCart id={item?.id} item={item?.bookingItem} />
                        </div>
                    ))
                }
                <NoData data={data} loading={isLoading} />
                <LoadingData loading={isLoading} />
            </div>
        </div>
    );
};

export default Page;