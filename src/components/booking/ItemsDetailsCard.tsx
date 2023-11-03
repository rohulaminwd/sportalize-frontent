import { useCreateWishlistMutation, useDeleteWishlistMutation, useMyWishlistQuery } from '@/redux/api/wishlist';
import { getUserInfo } from '@/service/auth.service';
import { IconHeartFilled, IconHeartPlus } from '@tabler/icons-react';
import { Tooltip, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ItemsDetailsCard = ({ item }: any) => {
    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const [addWishList, setAddWishList] = useState<any>("")
    const { data, isLoading } = useMyWishlistQuery(id)
    const [addWishlist] = useCreateWishlistMutation()
    const [deleteWishlist] = useDeleteWishlistMutation()
    const [add, setAdd] = useState<string>('')

    // console.log(data, isLoading)

    const existWishlist = (id: string) => {
        const wishlistId = data?.find((i: any) => i?.bookingItemId === id)
        return wishlistId
    }


    const handleWishlist = async (bookingItemId: string) => {
        setAddWishList(bookingItemId)
        const isWishlist = await existWishlist(bookingItemId)
        console.log(isWishlist)
        const reviewData = {
            userId: id,
            bookingItemId
        }
        if (!isWishlist) {
            setAddWishList(!addWishList)
            try {
                const res: any = await addWishlist(reviewData);
                console.log(res?.id)
                if (res?.id) {
                    setAddWishList(true)
                    message.success("Add Your wishlist");
                }
            } catch (err: any) {
                setAddWishList(true)
                message.error("could not add");
            }
        }
        else if (isWishlist) {
            setAddWishList(!addWishList)
            try {
                const res: any = await deleteWishlist(isWishlist?.id);
                console.log(res?.id)
                if (res) {
                    setAddWishList(true)
                    message.success("remove wishlist");
                }
            } catch (err: any) {
                setAddWishList(true)
                message.error("could not remove");
            }
        }
    }

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
                        <Tooltip placement="top" color='#593dbe' title={"add wishlist"}>
                            <span onClick={() => handleWishlist(item?.id)} className='text-[#a94ae0] font-bold text-24 cursor-pointer '>{(existWishlist(item?.id)) ? <IconHeartFilled /> : <IconHeartPlus />}</span>
                        </Tooltip>

                    </div>
                    <div className="flex items-center my-2 justify-between">
                        <h5 className='text-purple-700 text-sm font-bold text2'>{item?.location}</h5>
                        <span className='text-[#e5cefa] font-bold text2 font-Oswald '>{item?.price}</span>
                    </div>
                    <div className="mt-2 font-all">
                        <p className='text-sm text2'>{item?.description?.slice(0, 100)}</p>
                        <Link href={`item-details/${item?.id}`} className='btn-sm mt-5 font-reem btn w-full bg-search-box bg-[#b393ee] hover:bg-purple-600 border-0 text-white'>See Details</Link>
                        <Link href={`order-booking/${item?.id}`} className='btn-sm mt-2 font-reem btn w-full bg-btn bg-[#b393ee] hover:bg-purple-600 border-0 text-[#dacbf7]'>Booking Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsDetailsCard;