"use client"

import { authKey } from "@/constants/storageKye";
import { removeUserInfo } from "@/service/auth.service";
import { message } from "antd";
import { useRouter } from "next/navigation";


const LogOutModule = ({ setLogout }: any) => {
    const router = useRouter()
    const logOut = () => {
        removeUserInfo(authKey)
        router.push("/")
        message.success("You have been logged out successfully")
        setLogout(null)
    }

    return (
        <div>
            <input type="checkbox" id="Logout-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box bg-[#8955eb]">
                    <p className="text-white font-bold text-2xl text-center font-reem">Are you sure you want to Logout ?</p>
                    <div className="flex items-center justify-center gap-3 mt-5">
                        <button onClick={logOut} className="btn btn-error w-[100px] text-white btn-sm">Logout</button>
                        <label htmlFor="Logout-modal" className="btn btn-sm w-[100px] ">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOutModule;