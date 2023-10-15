

import { Layout } from 'antd';

import { useState } from 'react';

import ProfileImg from './ProfileImg';
import { dropdownDashboard } from '@/constants/routes';
import LogOutModule from '@/modules/LogOutModule';
const { Header: AntHeader } = Layout;

const Header = () => {
    const [logout, setLogout] = useState<any>(null);

    return (
        <div
            className='bg-[#3b2380] flex justify-between items-center px-5 p-3'
        >
            <div>

            </div>
            <ProfileImg routes={dropdownDashboard} setLogout={setLogout} />
            {logout && <LogOutModule setLogout={setLogout} />}
        </div>
    );
};

export default Header;