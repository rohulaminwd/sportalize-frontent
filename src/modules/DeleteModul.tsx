"use client"

import ProgressSpeener from "@/components/ui/ProgressSpeener";
import { useDeleteBookingItemsMutation } from "@/redux/api/bookingItemApi";
import { useDeleteUserMutation } from "@/redux/api/userApi";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";


const ModuleModule = ({ setDeleteItem, deleteItem }: any) => {
    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [item, type] = deleteItem

    const [deleteAction, isLoading] = useDeleteBookingItemsMutation(item?.id)
    const [userDelete] = useDeleteUserMutation(item?.id)

    const handleDelete = async () => {
        setLoading(true)
        if (type === "bookingItems") {
            try {
                const res: any = await deleteAction(item?.id);
                console.log(res)
                if (res) {
                    setLoading(false)
                    // router.push("/profile");
                    setDeleteItem(null)
                    message.success("Delete successfully!");
                }
                setLoading(false)
                console.log(res);
            } catch (err: any) {
                setLoading(false)
                console.error(err.message);
                setError(err?.message)
            }

        }
        if (type === "users") {
            try {
                const res: any = await userDelete(item?.id);
                console.log(res)
                if (res) {
                    setLoading(false)
                    // router.push("/profile");
                    setDeleteItem(null)
                    message.success("Delete successfully!");
                }
                setLoading(false)
                console.log(res);
            } catch (err: any) {
                setLoading(false)
                console.error(err.message);
                setError(err?.message)
            }
        }
    }

    return (
        <div>
            <input type="checkbox" id="delete-module" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box bg-[#5335c0f3]">
                    <p className="text-white font-bold text-2xl text-center font-reem">Are you sure you want to delete</p>
                    <div className="my-3">
                        <ProgressSpeener loading={loading} />
                    </div>
                    {
                        error && <p className='text-[#e24242]'>{error}</p>
                    }
                    <div className="flex items-center justify-center gap-3">
                        <button onClick={handleDelete} className="btn btn-error w-[100px] text-white btn-sm">Delete</button>
                        <label htmlFor="delete-module" className="btn btn-sm w-[100px] ">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleModule;