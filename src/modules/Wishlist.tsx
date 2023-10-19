import WishlistCart from '@/components/booking/WishlistCart';
import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import { useMyWishlistQuery } from '@/redux/api/wishlist';
import { getUserInfo } from '@/service/auth.service';
import { IconHeartPlus, IconX } from '@tabler/icons-react';

const Wishlist = () => {

    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const { data, isLoading } = useMyWishlistQuery(id)

    return (
        <div className="drawer">
            <input id="wish-list" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="wish-list" className="text-[#cea1f3] cursor-pointer"><IconHeartPlus size={28} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="wish-list" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-[#4d21c5c4] text-base-content">
                    <label htmlFor="wish-list" aria-label="close sidebar" className="text-white absolute cursor-pointer top-5 right-4"><IconX /></label>
                    <h1 className='text-xl font-Oswald text-white text-center'>Your Favorite List</h1>
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
                </ul>
            </div>
        </div>
    );
};

export default Wishlist;