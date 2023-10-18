import AllBookingItem from '@/components/booking/AllBookingItem';

const Page = () => {

    return (
        <div>
            <div className='mb-2'>
                <span
                    className="text-[20px] font-extrabold py-4 font-all pt-4 sm:mb-5 md:mt-2 sm:text-[28] md:text-[28px] text2 "
                >
                    Manage Bookings
                </span>
            </div>
            <div>
                <AllBookingItem />
            </div>
        </div>
    );
};

export default Page;