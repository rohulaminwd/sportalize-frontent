import AllUsers from '@/components/users/AllUsers';
import React from 'react';

const ManageUsers = () => {
    return (
        <div>
            <div className='mb-2'>
                <span
                    className="text-[20px] font-extrabold py-4 font-all pt-4 sm:mb-5 md:mt-2 sm:text-[28] md:text-[28px] text2 "
                >
                    Manage Users
                </span>
            </div>
            <div>
                <AllUsers />
            </div>
        </div>
    );
};

export default ManageUsers;