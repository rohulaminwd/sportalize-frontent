"use client"

import ItemList from '@/components/booking/ItemList';
import NavbarSecondary from '@/share/NavbarSecondary';


const page = () => {
    return (
        <div className='min-h-screen h-full bg-[#3e1aa09d]'>
            <NavbarSecondary />
            <div className='max-w-7xl mx-auto'>
                <div>
                    <ItemList />
                </div>
            </div>
        </div>

    );
};

export default page;