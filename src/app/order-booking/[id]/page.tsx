"use client"


import DateRangePiker from '@/components/ui/DateRangePiker';
import LoadingData from '@/components/ui/LoadingData';
import NoData from '@/components/ui/NoData';
import ProgressSpeener from '@/components/ui/ProgressSpeener';
import { useCreateOrderMutation } from '@/redux/api/bookingApi';
import { useBookingItemQuery, useCreateBookingMutation } from '@/redux/api/bookingItemApi';
import { getUserInfo } from '@/service/auth.service';
import { message } from 'antd';
import { useState } from 'react';


const BookingOrder = ({ params: { id } }: { params: { id: string } }) => {
    const userInfo: any = getUserInfo()
    const userId = userInfo ? userInfo?.userId : ''
    const [startTime, setStartTime] = useState<any>()
    const [endTime, setEndTime] = useState<any>()
    const [loading, setLoading] = useState<any>(false)

    const { data, isLoading } = useBookingItemQuery(id);

    const [bookingOrder] = useCreateOrderMutation()

    const handleBooking = async () => {
        setLoading(true)
        const bookingData = {
            startTime,
            endTime,
            userId,
            bookingItemId: id,
        }
        try {
            const res: any = await bookingOrder(bookingData)
            if (res?.id) {
                message.success("Order create successfully")
                setLoading(false)
                console.log(res)
            }
            setLoading(false)
            console.log(res, "orders")
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className='min-h-screen h-full bg-[#4717a08c]'>
            <div className='max-w-7xl mx-auto px-3'>
                <div className='pt-5'>
                    <h1 className='text-center'>
                        <span className='text2 text-3xl '>
                            Booking order details Details
                        </span>
                    </h1>
                </div>
                <LoadingData loading={isLoading} />
                <NoData data={data} loading={isLoading} />
                <div className='flex mt-5 max-w-[600px] w-full mx-auto items-center font-reem justify-center'>
                    <div className='!w-full'>
                        <div className='my-5'>
                            <div className=' bg-[#6937df1e] rounded-md p-2 flex items-center justify-between'>
                                <h3>Title:</h3>
                                <h3>{data?.title}</h3>
                            </div>
                            <div className=' bg-[#6937df1e] my-3 rounded-md p-2 flex items-center justify-between'>
                                <h3>price:</h3>
                                <h3>{data?.price}</h3>
                            </div>
                        </div>
                        <div>
                            <p className="text-[20px] my-2 text-left">
                                <span className="text-left text2 py-0 font-bold">
                                    Booking Start Time
                                </span>
                            </p>
                            <input
                                type='date'
                                placeholder="Start time"
                                required
                                className=" text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                                onChange={(e) => setStartTime(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="text-[20px] my-2 text-left">
                                <span className="text-left text2 py-0 font-bold">
                                    Booking End Time
                                </span>
                            </p>
                            <input
                                type='date'
                                placeholder="End time"
                                required
                                className=" text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                                onChange={(e) => setEndTime(e.target.value)}
                            />
                        </div>
                        {/* <div>
                            <DateRangePiker />
                        </div> */}
                        <ProgressSpeener loading={loading} />
                        <div className='mt-5'>
                            <button onClick={handleBooking} className='bg-btn rounded-md p-3 w-full text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOrder;