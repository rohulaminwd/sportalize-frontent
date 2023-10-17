import SideBarMenu from '@/components/ui/SideBarMenu';
import { sidebarItems } from '@/components/ui/SidebarItems';
import { getUserInfo } from '@/service/auth.service';
import { IconMenu2, IconX } from '@tabler/icons-react';

const DashboardSidebarModule = () => {
    const userInfo: any = getUserInfo()
    const role = userInfo ? userInfo?.role : ''
    return (
        <div className="drawer z-[999999]">
            <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="sidebar-dashboard" className="text-[#cea1f3] cursor-pointer"><IconMenu2 size={28} /></label>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-dashboard" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-2 py-6 w-48 min-h-full backdrop-blur-xl bg-[#6226d1b6] text-base-content">
                    <label htmlFor="wish-list" aria-label="close sidebar" className="text-white absolute cursor-pointer top-2 right-2"><IconX /></label>
                    <h1 className='text-xl font-Oswald text-white text-center'>SPortalize</h1>
                    <SideBarMenu
                        items={sidebarItems(role)}
                    />
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebarModule;