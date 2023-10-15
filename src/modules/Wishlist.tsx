import { IconHeartPlus, IconX } from '@tabler/icons-react';

const Wishlist = () => {
    return (
        <div className="drawer">
            <input id="wish-list" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="wish-list" className="text-[#cea1f3] cursor-pointer"><IconHeartPlus size={28} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="wish-list" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-72 min-h-full bg-[#784eebc4] text-base-content">
                    <label htmlFor="wish-list" aria-label="close sidebar" className="text-white absolute cursor-pointer top-5 right-4"><IconX /></label>
                    <h1 className='text-xl font-Oswald text-white text-center'>Your Favorite List</h1>
                </ul>
            </div>
        </div>
    );
};

export default Wishlist;