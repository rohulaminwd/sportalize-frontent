"use client"

import ProgressSpeener from "@/components/ui/ProgressSpeener";
import { useDeleteBookingItemsMutation } from "@/redux/api/bookingItemApi";
import { useDeleteUserMutation, useUpdateUserMutation } from "@/redux/api/userApi";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";


const CreateAdmin = ({ setAdminItem, adminItem }: any) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    const id = adminItem?.id

    const [createAdmin] = useUpdateUserMutation()

    const handleDelete = async () => {
        setLoading(true)
        const updateData = {
            role: "admin"
        }
        try {
            const res: any = await createAdmin({ body: updateData, id }).unwrap();;
            if (res?.id) {
                setLoading(false)
                setAdminItem(null)
                message.success("Admin Created successfully!");
            }
        } catch (err: any) {
            setLoading(false)
            console.error(err.message);
            setError(err?.message)
        }
    }

    return (
        <div>
            <input type="checkbox" id="create-admin" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box bg-[#5124cef3]">
                    <p className="text2 font-bold text-2xl text-center font-reem">Are you sure you want create Admin</p>
                    <div className="my-3">
                        <ProgressSpeener loading={loading} />
                    </div>
                    {
                        error && <p className='text-[#e24242]'>{error}</p>
                    }
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={handleDelete} className="bg-btn w-[100px] text-white rounded-lg font-bold uppercase py-[6px]">Create</button>
                        <label htmlFor="create-admin" className="btn btn-sm w-[100px] ">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;