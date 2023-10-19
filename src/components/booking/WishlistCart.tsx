import { useDeleteWishlistMutation } from '@/redux/api/wishlist';
import { IconTrash } from '@tabler/icons-react';
import { Tooltip, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WishlistCart = ({ item, id }: any) => {
    const [deleteWishlist] = useDeleteWishlistMutation()

    const setDeleteItem = async (id: string) => {
        try {
            const res: any = await deleteWishlist(id);
            if (res) {
                message.success("remove wishlist item");
            }
        } catch (err: any) {
            message.error("could not remove");
        }
    }

    return (
        <div>
            <div className='bg-[#693ce641] text-[#d1b4f7] rounded-lg my-2 border-2 p-1 duration-300 hover:border-[#6944f1] border-[#8f62fa60] flex items-center justify-between'>
                <Link href={`item-details/${item?.id}`} className='flex gap-x-3 text-white items-center'>
                    <div className='w-[60px] h-[60] rounded-lg overflow-hidden'>
                        <Image src={item?.img} className='w-[60px] h-[60px]' width={1000} height={1000} alt='image' />
                    </div>
                    <h3 className=''>
                        <p
                            className="text-[16px] inline-block font-bold font-alltext2 "
                        >
                            {item?.title}
                        </p>
                    </h3>
                </Link>
                <div className='flex items-end z-[100000] h-full'>
                    <button onClick={() => setDeleteItem(id)} className='text-[#802323] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                        <span><IconTrash /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistCart;