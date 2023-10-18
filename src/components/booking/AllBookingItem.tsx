"use client"

import { useGetBookingItemsQuery } from "@/redux/api/bookingItemApi";
import BookingItemCard from "./BookingItemCard";
import LoadingData from "../ui/LoadingData";
import NoData from "../ui/NoData";

const AllBookingItem = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useGetBookingItemsQuery({ ...query })
    return (
        <div>
            <div className=''>
                <div>
                    <h1 className='text-xl text2'>Total Booking Items</h1>
                </div>
                <div>
                    {
                        Array.isArray(data?.BookingItems) && data?.BookingItems?.map((item: any, index: number) => (
                            <div key={index}>
                                <BookingItemCard item={item} />
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

export default AllBookingItem;