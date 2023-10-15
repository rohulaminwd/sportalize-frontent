
import {
    ProfileOutlined,
    TableOutlined,
} from "@ant-design/icons";



import Link from "next/link";
import { USER_ROLE } from "@/constants/role";

export const sidebarItems = (role: string) => {

    const userSidebarItems: any = [
        {
            label: "Profile",
            key: "profile",
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}`} className="!text-white">Account Profile</Link>,
                    key: `/${role}/profile`,
                },
                {
                    label: <Link href={`/${role}/change-password`}>Change Password</Link>,
                    key: `/${role}/change-password`,
                },
            ],
        },
    ];

    const adminSidebarItems = [
        {
            label: <Link href={`/${role}/manage-student`} className="!text-white">Manage Students</Link>,
            icon: <TableOutlined />,
            key: `/${role}/manage-student`,
        },
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            icon: <TableOutlined />,
            key: `/${role}/manage-faculty`,
        },
    ];



    if (role === USER_ROLE.SUPER_ADMIN) return userSidebarItems;
    else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
    else if (role === USER_ROLE.USER) return userSidebarItems;
    else {
        return '';
    }
};