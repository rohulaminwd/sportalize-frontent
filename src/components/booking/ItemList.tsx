"user client"

import { useGetBookingItemsQuery } from '@/redux/api/bookingItemApi';
import ItemsDetailsCard from './ItemsDetailsCard';
import LoadingData from '../ui/LoadingData';
import NoData from '../ui/NoData';

const ItemList = () => {

    const query: Record<string, any> = {};
    const { data, isLoading } = useGetBookingItemsQuery({ ...query })

    return (
        <div className='pt-16'>
            <div className=''>
                <div>
                    <h1 className='text-xl font-Oswald font-bold mt-5 text2'>
                        <span className='text2'>Total Booking Items</span>
                    </h1>
                </div>
                <div className='booking-grid'>
                    {
                        Array.isArray(data?.BookingItems) && data?.BookingItems?.map((item: any, index: number) => (
                            <div key={index}>
                                <ItemsDetailsCard item={item} />
                            </div>
                        ))
                    }
                    <LoadingData loading={isLoading} />
                    <NoData data={data?.BookingItems} loading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default ItemList;