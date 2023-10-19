

import { USER_ROLE } from "@/constants/role";
import { IconClipboardList, IconUsers } from "@tabler/icons-react";
import { IconAddressBook, IconBrandBooking, IconHeart } from "@tabler/icons-react";

export const sidebarItems = (role: string) => {

    const defaultSidebarItems = [
        {
            label: "Profile",
            key: "profile",
            icon: <IconAddressBook />,
            path: "/profile"
        },
    ];

    const userSidebarItems = [
        ...defaultSidebarItems,
        {
            label: "Booking",
            icon: <IconBrandBooking />,
            key: `/booking`,
            path: "/booking-history"
        },
        {
            label: "My Favorite",
            icon: <IconHeart />,
            key: `/wishlist`,
            path: "/wishlist"
        },
    ];
    const AdminSidebarItems = [
        ...defaultSidebarItems,
        {
            label: "Mange User",
            icon: <IconUsers />,
            key: `/manage-users`,
            path: "/manage-users"
        },
        {
            label: "create Fields",
            icon: <IconClipboardList />,
            key: `/create-field`,
            path: "/crete-field"
        },
        {
            label: "Bookings",
            icon: <IconBrandBooking />,
            key: `/manage-booking`,
            path: "/manage-booking"
        },
    ];

    const SuperAdminSidebarItems = [
        ...defaultSidebarItems,
        {
            label: "Mange User",
            icon: <IconUsers />,
            key: `/manage-users`,
            path: "/manege-user"
        },
        {
            label: "create Fields",
            icon: <IconClipboardList />,
            key: `/create-field`,
            path: "/crete-field"
        },
        {
            label: "IconBrandBooking",
            icon: <IconHeart />,
            key: `/manage-booking`,
            path: "/manage-booking"
        },
    ];



    if (role === USER_ROLE.SUPER_ADMIN) return SuperAdminSidebarItems;
    else if (role === USER_ROLE.ADMIN) return AdminSidebarItems;
    else if (role === USER_ROLE.USER) return userSidebarItems;
    else {
        return defaultSidebarItems;
    }
};