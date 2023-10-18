
import Image from "next/image";
import field from "../../assets/image/booking-field2.jpeg"
import { bookingCategory } from "@/constants/bookingCategory";
import { IconHeartPlus } from '@tabler/icons-react';

const BookingItemCard = () => {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <div>
                <h1
                    className="text-[28px] text-center font-Oswald font-extrabold py-2 mt-5 font-all pt-2 sm:mb-5 sm:text-4xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    FIND YOUR PLAY
                </h1>
                <p
                    className=" font-Oswald text-center font-bold sm:text-xl md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e6a9f5] lg:my-4 "
                    data-aos="zoom-in-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                >
                    Find sports facilities from football pitches to tennis courts in a range of cities across the UK and Ireland
                </p>

            </div>
            <div className="booking-grid mt-8">
                {
                    bookingCategory?.map((item, index) => (
                        <div key={index} className="p-3" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                            <div className='booking-card rounded-xl p-4 bg-[#5d1dd33d] backdrop-blur-sm  font-reem border-[3px] border-[#570ab631] duration-200 hover:-translate-y-1'>
                                <div className="rounded-lg overflow-hidden relative min-h-[200px]">
                                    <div className="overly-card rounded-lg bg-search-box duration-500 absolute top-0 left-0 w-full h-full "></div>
                                    <Image src={field} className='rounded-md hover:scale-[1.1] duration-500 h-[200px]' width={1000} alt="" />
                                </div>
                                <div className="flex mt-5 items-center my-2 justify-between">
                                    <h5 className='text-purple-700 text-xl font-bold text2'>{item?.label}</h5>
                                    <span className='text-[#e5cefa] font-bold text-24 '>12</span>
                                </div>
                                <div className="mt-2 font-all">
                                    <p className='text-sm text2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, harum!</p>
                                    <label htmlFor='class-details' className='btn-sm mt-5 font-reem btn w-full bg-search-box bg-[#b393ee] hover:bg-purple-600 border-0 text-white'>See details</label>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default BookingItemCard;