"use client"

import { useCreateFeedbackMutation, useFeedbacksQuery } from '@/redux/api/feedbackApii';
import React, { useState } from 'react';
import TextAreaField from '../profile/TextAreaField';
import Lottie from 'lottie-react';
import feedback from "../../assets/lottie/feedback.json"
import { getUserInfo } from '@/service/auth.service';
import { message } from 'antd';
import SpinBtn from '../ui/SpinBtn';


const Feedback = () => {
    const { data, isLoading } = useFeedbacksQuery({})
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState<string>()
    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''

    const [updateFeedback] = useCreateFeedbackMutation()

    const addFeedback = async () => {
        setLoading(true)
        const updateData = {
            description,
            userId: id
        }
        try {
            const res = await updateFeedback(updateData).unwrap();
            console.log(res, data)
            if (res?.id) {
                setLoading(false)
                message.success("Thank you your Feedback submit successfully");
                setDescription("")
            }
            setLoading(false)
            console.log(res);
        } catch (err: any) {
            setLoading(false)
            console.error(err.message);
            setError(err?.message)
        }
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mb-5'>
                <h1
                    className="text-[28px] text-center font-Oswald font-extrabold py-2 mt-5 font-all pt-2 sm:mb-5 sm:text-4xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
                    data-aos="zoom-in-up"
                    data-aos-delay="300"
                    data-aos-duration="800"
                >
                    USER REVIEW
                </h1>
                <p
                    className=" font-Oswald text-center font-bold sm:text-xl md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e6a9f5] lg:my-4 "
                    data-aos="zoom-in-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                >
                    Find sports facilities from football pitches to tennis courts in a range of cities across the UK and Ireland
                </p>

            </div>
            <div className='md:flex justify-between mt-20 items-center gap-x-3 py-5'>
                <div className='w-full'>
                    <div className='w-[300px] md:w-[500px] mx-auto'>
                        <Lottie
                            animationData={feedback}
                            loop={true}
                            style={{ height: "100%" }}
                        />
                    </div>
                </div>
                <div className='w-full px-3'>
                    <div className='w-full'>
                        <div className='w-full p-3 rounded-xl bg-[#6f43e92f]'>
                            <TextAreaField label={"Add Your Feedback"} value={description} setValue={setDescription} />
                        </div>
                        {error && (
                            <p className="text-red-500 font-Oswald mb-2">
                                <small>{error}</small>
                            </p>
                        )}
                        {
                            !loading &&
                            <button onClick={addFeedback} className="flex cursor-pointer text-white w-full sm:w-[300px] mt-5 gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                                <span>Send Feedback</span>
                            </button>
                        }
                        <SpinBtn loading={loading} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;