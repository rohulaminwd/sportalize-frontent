"user client"

import { useGetBookingItemsQuery } from '@/redux/api/bookingItemApi';
import ItemsDetailsCard from './ItemsDetailsCard';
import LoadingData from '../ui/LoadingData';
import NoData from '../ui/NoData';
import { useState } from 'react';

const ItemList = () => {

    const query: Record<string, any> = {};
    // const [page, setPage] = useState<number>(1);
    // const [size, setSize] = useState<number>(10);
    // const [sortBy, setSortBy] = useState<string>("");
    // const [sortOrder, setSortOrder] = useState<string>("");

    // query["limit"] = size;
    // query["page"] = page;
    // query["sortBy"] = sortBy;
    // query["sortOrder"] = sortOrder;

    const { data, isLoading } = useGetBookingItemsQuery({ ...query })

    const BookingItems = data?.BookingItems;
    const meta = data?.meta;

    console.log(BookingItems, data, "dfd")
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
                        Array.isArray(BookingItems) && BookingItems?.map((item: any, index: number) => (
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