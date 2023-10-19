"use client"


import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import { useBookingItemQuery } from '@/redux/api/bookingItemApi';


const BookingOrder = ({ params: { id } }: { params: { id: string } }) => {
    const { data, isLoading } = useBookingItemQuery(id);

    return (
        <div className='min-h-screen h-full bg-[#6926e68c]'>
            <div className='max-w-7xl mx-auto px-3'>
                <div className='pt-5'>
                    <h1>
                        <span className='text2 text-3xl '>
                            Booking Item Details
                        </span>
                    </h1>
                </div>
                <LoadingData loading={isLoading} />
                <NoData data={data} loading={isLoading} />
                <div className='flex mt-5 md:p-6 h-full items-center font-reem justify-center'>
                    <h1>{data?.title}</h1>
                </div>
            </div>
        </div>
    );
};

export default BookingOrder;