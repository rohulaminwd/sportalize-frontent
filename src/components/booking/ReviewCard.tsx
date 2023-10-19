import React from 'react';
import UserProfileImg from '../ui/UserProfileImg';
import { AiFillStar } from 'react-icons/ai';
import { useUserQuery } from '@/redux/api/userApi';

const ReviewCard = ({ review }: any) => {
    const { data, isLoading } = useUserQuery(review?.userId)
    return (
        <div>
            <div className="flex gap-x-2 chat chat-start py-1.5 w-full items-start">
                <div className="flex mt-1 items-center gap-x-1.5">
                    <UserProfileImg
                        me={data}
                        textColor="ring-offset-[1px] text-[12px] text-white"
                        className="w-7 h-7 -ml-[1px] bg-purple-700 ring-[1px] ring-[#c591f2]"
                    />
                </div>
                <div className="flex !w-full -mt-2 py-0 chat-bubble bg-[#7838df3a] justify-between items-center border-l-top-0 border border-[#763edd38] rounded-xl p-1">
                    <div className="ml-1">
                        {/* <p className="text-sm">helo</p> */}
                        <div>
                            <p className="text-sm text2">{review?.review}</p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        {
                            review?.rating?.split("-")?.map((i: any) => (
                                <span key={i} className="text-[#eede4b]"><AiFillStar size={16} /></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;