"use client"

import { IconPhoto, IconPhotoUp } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BookingFromData from './BookingFromData';
import Image from 'next/image';
import UploadPhoto from '../ui/UploadPhoto';
import { useCreateBookingMutation } from '@/redux/api/bookingItemApi';
import { useRouter } from 'next/navigation';
import { Spin, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import SpinBtn from '../ui/SpinBtn';


const CreateBooking = () => {
    const [image, setImage] = useState<any>();
    const [img, setImg] = useState<any>();
    const router = useRouter()
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    const [createdBooking] = useCreateBookingMutation()

    const onSubmit = async (data: any) => {
        setLoading(true)
        const fromData = new FormData();
        fromData.append("file", img);
        fromData.append("upload_preset", "expart_future_plan");
        fromData.append("cloud_name", "ddlrfuyzp");
        const url = `https://api.cloudinary.com/v1_1/ddlrfuyzp/image/upload`;
        fetch(url, {
            method: "POST",
            body: fromData,
        })
            .then((res) => res.json())
            .then(async (result) => {

                const img = result.secure_url;
                data.price = parseInt(data.price)

                if (result) {
                    try {
                        const res = await createdBooking({ ...data, img }).unwrap();
                        console.log(res, data)
                        if (res?.id) {
                            setLoading(false)
                            router.push("/manage-booking");
                            message.success("Booking Item created successfully!");
                            reset()
                        }

                    } catch (err: any) {
                        setLoading(false)
                        console.error(err.message);
                        setError(err?.message)
                    }
                }


            })
        console.log()
    }



    return (
        <div className='md:px-4'>
            <div className='my-5 w-full'>
                <div className='max-w-[300px] mx-auto'>
                    <div className='rounded-xl border overflow-hidden max-h-[200px] border-dashed border-[#7f54e6b9]'>
                        {!image && <div className='flex items-center w-full  justify-center p-5'>
                            <span className='text-[#ac82f09c]'><IconPhoto size={100} /></span>
                        </div>}
                        {image && <Image src={image?.image} width={1000} height={1000} alt='image' />}
                    </div>
                    <UploadPhoto setImage={setImage} setImg={setImg} />
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <BookingFromData
                                register={register}
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 font-Oswald mb-2">
                                <small>{error}</small>
                            </p>
                        )}
                        <div className="w-full">
                            {
                                !loading && <input
                                    className="flex cursor-pointer text-white w-full sm:w-[300px] mt-5 gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn"
                                    type="submit"
                                    value="Submit"
                                />
                            }
                            <SpinBtn loading={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default CreateBooking;