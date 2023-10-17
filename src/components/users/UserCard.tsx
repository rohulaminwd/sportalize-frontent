"use client"
import { useState } from 'react';
import UserProfileImg from '../ui/UserProfileImg';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { IconUsersPlus } from '@tabler/icons-react';
import { Tooltip } from 'antd';
import ModuleModule from '@/modules/DeleteModul';
import CreateAdmin from '@/modules/CreadeAdmin';

const UserCard = ({ item, index }: any) => {
    const [deleteItem, setDeleteItem] = useState<any>()
    const [adminItem, setAdminItem] = useState<any>()
    return (
        <div>
            <div className='bg-[#5e33d434] text-[#d1b4f7] rounded-lg my-2 border-2 p-3 duration-300 hover:border-[#6944f1] border-[#8f62fa60] flex items-center justify-between'>
                <div className='flex gap-x-3 items-center'>
                    <span className='text-lg font-bold'>{index + 1}</span>
                    <div>
                        <UserProfileImg
                            className={'w-[28px]  h-[28px] md:w-[36px] bgGradient md:h-[36px] mx-auto ring-purple-700 ring-[3px] ring-offset-base-100 ring-offset-[2px]'}
                            textColor={'text-white text-[16px] sm:text-[16px] font-reem text2 font-bold font-reem'}
                            me={item}
                        />
                    </div>
                    <h3 className=''>
                        <span
                            className="text-[16px] font-bold p-1 font-all sm:text-[18] md:text-[20px] text2 "
                        >
                            {item?.firstName} {item?.lastName}
                        </span>
                    </h3>
                </div>
                <h3 className='hidden sm:block'>
                    <span
                        className="text-[16px] font-bold p-1 font-all sm:text-[18] md:text-[20px] text2 "
                    >
                        {item?.role}
                    </span>
                </h3>
                <div className='flex items-center'>
                    <Tooltip placement="top" color='#593dbe' title={"create admin"}>
                        <label htmlFor='create-admin' onClick={() => setAdminItem(item)} className='text-[#c5a9fa] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span><IconUsersPlus /></span>
                        </label>
                    </Tooltip>
                    <Tooltip placement="top" color='#593dbe' title={"update user"}>
                        <button className='text-[#a995f1f3] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span><IconEdit /></span>
                        </button>
                    </Tooltip>
                    <Tooltip placement="top" color='#ec4242' title={"delete user"}>
                        <label htmlFor='delete-module' onClick={() => setDeleteItem([item, "users"])} className='text-[#802323] hover:border rounded-md border-[#a17df379] p-1 md:px-3'>
                            <span><IconTrash /></span>
                        </label>
                    </Tooltip>
                </div>
            </div>
            {deleteItem && <ModuleModule deleteItem={deleteItem} setDeleteItem={setDeleteItem} />}
            {adminItem && <CreateAdmin adminItem={adminItem} setAdminItem={setAdminItem} />}
        </div>
    );
};

export default UserCard;