import {
    IconHome2,
    IconBrandBooking,
    IconArticle,
    IconLayoutDashboard,
    IconSettingsPlus
} from '@tabler/icons-react';

export const homeRoute = [
    {
        name: "Home",
        path: "/",
        icon: <IconHome2 />
    },
    {
        name: "Booking",
        path: "/items-list",
        icon: <IconBrandBooking />
    },
    {
        name: "Blog",
        path: "/",
        icon: <IconArticle />
    },

]

export const dropdownHome = [
    {
        name: "Dashboard",
        path: "/profile",
        icon: <IconLayoutDashboard />
    },
    {
        name: "sitting",
        path: "/",
        icon: <IconSettingsPlus />
    },
]

export const dropdownDashboard = [
    {
        name: "Home",
        path: "/",
        icon: <IconLayoutDashboard />
    },
    {
        name: "sitting",
        path: "/",
        icon: <IconSettingsPlus />
    },
]