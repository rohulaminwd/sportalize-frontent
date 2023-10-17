

import { Layout } from 'antd';

import { useState } from 'react';

import ProfileImg from './ProfileImg';
import { dropdownDashboard } from '@/constants/routes';
import LogOutModule from '@/modules/LogOutModule';
import DashboardSidebarModule from '@/modules/DashboardSidebarModule';
const { Header: AntHeader } = Layout;

const Header = () => {
    const [logout, setLogout] = useState<any>(null);

    return (
        <div
            className='bg-[#3b2380] flex justify-between items-center px-3 md:px-5 p-2'
        >
            <div className="flex items-center gap-x-2">
                <div className='md:hidden'>
                    <DashboardSidebarModule />
                </div>
                <h3 className='text2 text-xl'>Sportalize</h3>
            </div>
            <div>
                <ProfileImg routes={dropdownDashboard} setLogout={setLogout} />
                {logout && <LogOutModule setLogout={setLogout} />}
            </div>
        </div>
    );
};

export default Header;