import CreateBooking from '@/components/booking/CreateBooking';
import React from 'react';

const CreateBookingItem = () => {
    return (
        <div>
            <div>
                <span className='text2 text-2xl font-bold'>Create Booking Item</span>
            </div>
            <div>
                <CreateBooking />
            </div>
        </div>
    );
};

export default CreateBookingItem;