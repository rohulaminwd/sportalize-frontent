"use client"

import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import { useBookingItemQuery } from '@/redux/api/bookingItemApi';
import Image from 'next/image';

const Details = ({ params: { id } }: { params: { id: string } }) => {


    const { data, isLoading } = useBookingItemQuery(id);


    return (
        <div>
            <div>
                <h1>
                    <span className='text2 text-3xl '>
                        Booking Item Details
                    </span>
                </h1>
            </div>
            <LoadingData loading={isLoading} />
            <NoData data={data} loading={isLoading} />
            <div className='flex mt-5 md:p-6 items-center font-reem justify-center'>
                <div className='sm:flex gap-x-4 items-center'>

                    <div className='w-full flex items-center justify-center'>
                        <div className='max-w-[800px] max-h-[800px] rounded-lg overflow-hidden'>
                            <Image src={data?.img} width={1000} height={1000} alt='image' />
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className=''>
                            <h3
                                className="text-xl mt-3 inline-block font-bold font-all sm:text-[18] md:text-[40px] text2 "
                            >
                                {data?.title}
                            </h3>
                            <p
                                className="text-[16px] mt-3 font-bold font-all sm:text-[18] md:text-[20px] text2 "
                            >
                                {data?.description}
                            </p>

                            <div className='mt-5 rounded-md flex justify-between text-[#c6abf7] text-xl items-center p-2 bg-[#b68af823]'>
                                <span className=''>Price: </span>
                                <span className='font-bold'>{data?.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;