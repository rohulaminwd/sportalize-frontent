"use client"

import { useUsersQuery } from "@/redux/api/userApi";
import UserCard from "./UserCard";
import { IUser } from "@/types";
import LoadingData from "../ui/LoadingData";
import NoData from "../ui/NoData";

const AllUsers = () => {
    const query: Record<string, any> = {};
    const { data, isLoading } = useUsersQuery({ ...query })

    return (
        <div className='w-full'>
            <div>
                <h1 className='text-xl text2'>Total users</h1>
            </div>
            <div className="w-full">
                {
                    Array.isArray(data?.users) && data?.users?.map((item: IUser, index: number) => (
                        <div key={index}>
                            <UserCard item={item} index={index} />
                        </div>
                    ))
                }
                <LoadingData loading={isLoading} />
                <NoData data={data} loading={isLoading} />
            </div>
        </div>
    );
};

export default AllUsers;