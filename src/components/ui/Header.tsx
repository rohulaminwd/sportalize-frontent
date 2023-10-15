import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { removeUserInfo } from '@/redux/service/auth.service';
import { authKey } from '@/constants/storageKye';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import UserProfileImg from './UserProfileImg';
import ProfileImg from './ProfileImg';
import { dropdownDashboard } from '@/constants/routes';
const { Header: AntHeader } = Layout;

const Header = () => {

    return (
        <div
            className='bg-[#3b2380] flex justify-between items-center px-5 p-3'
        >
            <div>

            </div>
            <ProfileImg routes={dropdownDashboard} />
        </div>
    );
};

export default Header;