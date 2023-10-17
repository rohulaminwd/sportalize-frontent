"use client"

import { useState } from "react";
import { Layout, Menu, } from "antd"

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "./SidebarItems";
import { BiFootball } from "react-icons/bi";
import SideBarMenu from "./SideBarMenu";
import { getUserInfo } from "@/service/auth.service";

const { Sider } = Layout


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const role = USER_ROLE.ADMIN
    const userInfo: any = getUserInfo()
    // const role = userInfo ? userInfo?.role : ''
    const bgGradientStyle: any = {
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        // background: "#ffcc99",
        left: 0,
        top: 0,
        bottom: 0,

    };
    // const { role } = getUserInfo() as any;
    console.log({ role }, "role")
    return (
        <div
            className="text-purple-300 bg-[#3d1881d2] backdrop-blur-md w-[200px] overflow-auto h-screen sticky left-0 top-0 bottom-0"
            style={bgGradientStyle}
        >

            <div
                className="font-bold flex items-center justify-center text-white  mt-3 text-[24px] text-center"
            >

                {!collapsed ? (<span className="text2 flex items-center"> <BiFootball /> Sportalize</span>) : (<span className="text2 flex items-center"><BiFootball /> SPL</span>)}
            </div>

            {/* <Menu
                theme="light"
                className="bg-transparent text-[#ebccf5] "
                defaultSelectedKeys={['1']}
                mode="inline"
                items={sidebarItems(role)}
            /> */}
            <SideBarMenu
                items={sidebarItems(role)}
            />
        </div>
    );
};

export default Sidebar;