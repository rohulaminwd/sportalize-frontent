"use client"

import ReviewCard from '@/components/booking/ReviewCard';
import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import AddReview from '@/modules/AddReview';
import { useBookingItemQuery } from '@/redux/api/bookingItemApi';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DetailsPage = ({ params: { id } }: { params: { id: string } }) => {
    const { data, isLoading } = useBookingItemQuery(id);
    const [reviewItem, setReviewItem] = useState<any>();

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
                    <div className='sm:flex gap-x-8 justify-center'>

                        <div className='w-full flex justify-center'>
                            <div className='max-w-[800px] max-h-[800px] rounded-lg overflow-hidden'>
                                <Image src={data?.img} width={1000} height={1000} alt='image' />
                            </div>
                        </div>

                        <div className='w-full'>
                            <div className=''>
                                <h3
                                    className="mt-3 py-2 inline-block font-all text-[24px] md:text-[40px] text2 "
                                >
                                    {data?.title}
                                </h3>
                                <p
                                    className="text-[16px] mt-3 font-bold font-all sm:text-[18] md:text-[20px] text2 "
                                >
                                    {data?.description}
                                </p>

                                <div className='mt-5 rounded-md flex justify-between text-[#cdb6f8] text-xl items-center p-2 bg-[#7529e623]'>
                                    <span className=''>Price: </span>
                                    <span className='font-bold text2'>{data?.price} $</span>
                                </div>
                                <div className='mt-5 bg-[#7529e623] rounded-md flex justify-between text-[#cdb6f8] text-xl items-center p-2 '>
                                    <span className=''>Location: </span>
                                    <span className='font-bold text2'>{data?.location}</span>
                                </div>
                                <div className='mt-5 p-3 rounded-xl bg-[#7529e623]'>
                                    <h3 className='text2 font-bold mb-3 font-reem'>See fields Venue</h3>
                                    <div className='full'>
                                        <iframe
                                            className="w-full h-[130px] sm:h-[200px] rounded-xl"
                                            // allowFullScreen={""}
                                            loading="lazy"
                                            title="Googl map"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            src={data?.venu}
                                        ></iframe>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <Link href="/" className='bg-btn rounded-xl py-2 px-5 my-5 block text-center w-full text-white'>Booking Now</Link>
                                </div>
                                <div className='mt-5 p-3 rounded-xl bg-[#7529e623]'>
                                    <h3 className='text2 font-bold text-xl mb-3'>User Review and Ratting</h3>
                                    <div className='my-5'>
                                        {
                                            data?.reviewRatings && data?.reviewRatings?.map((item: any, index: number) => (
                                                <div key={index}>
                                                    <ReviewCard review={item} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='flex justify-end items-center'>
                                        <label
                                            onClick={() => setReviewItem(data?.id)}
                                            htmlFor="review-module"
                                            className='bg-btn py-2 px-3 text-white text-sm font-reem uppercase rounded-md'
                                        ><span className='text2'>Add Review</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                reviewItem && <AddReview reviewItem={reviewItem} setReviewItem={setReviewItem} />
            }
        </div>
    );
};

export default DetailsPage;