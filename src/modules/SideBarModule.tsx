import { homeRoute } from '@/constants/routes';
import Link from 'next/link';
import { IconMenu2, IconLogin, IconUserSquareRounded, IconBallVolleyball } from '@tabler/icons-react';

const SideBarModule = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="text-white"><IconMenu2 /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu py-4 px-1 w-44 min-h-full bgGradient text-base-content">
                    <div className="flex cursor-pointer my-5 justify-left ml-3 items-center gap-x-2 text-[22px] font-extrabold font-Oswald">
                        <span className='text-white'><IconBallVolleyball size={28} /></span>
                        <span className='text2 py-1'>Sportalize</span>
                    </div>
                    {
                        homeRoute?.map((item: any, index: number) => (
                            <li key={index} className=''>
                                <Link href={item?.path} className='flex hover:bg-[#483b973a] items-center px-3'>
                                    <span style={{ marginRight: "5px" }} className='font-Oswald text-white'>{item?.icon}</span>
                                    <span className='font-Oswald text2 py-1 text-[18px]'>{item?.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                    <li className='hover:bg-search-box'>
                        <Link href='signup' className='flex items-center px-3'>
                            <span style={{ marginRight: "5px" }} className='font-Oswald text-[10px] text-white'><IconUserSquareRounded /></span>
                            <span className='font-Oswald text2 py-1 text-[18px]'>Sign Up</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='login' className='flex items-center px-3'>
                            <span style={{ marginRight: "5px" }} className='font-Oswald text-[10px] text-white'><IconLogin /></span>
                            <span className='font-Oswald text2 py-1 text-[18px]'>Sign</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>);
};

export default SideBarModule;