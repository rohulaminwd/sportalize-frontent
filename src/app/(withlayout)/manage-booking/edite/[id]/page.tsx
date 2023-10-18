"use client"

import UploadPhoto from '@/components/ui/UploadPhoto';
import { useBookingItemQuery, useUpdateBookingItemsMutation } from '@/redux/api/bookingItemApi';
import { IconPhoto } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, message } from 'antd';
import InputText from '@/components/profile/InputText';
import TextAreaField from '@/components/profile/TextAreaField';
import SelectField from '@/components/profile/SelectField';
import { bookingCategory } from '@/constants/bookingCategory';
import SpinBtn from '@/components/ui/SpinBtn';

const Page = ({ params: { id } }: { params: { id: string } }) => {

    const { data, isLoading } = useBookingItemQuery(id);

    const [image, setImage] = useState<any>();
    const [img, setImg] = useState<any>();
    const router = useRouter()
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);


    const [title, setTitle] = useState<string>(data ? data?.title : data?.title);
    const [sportCategory, setSportCategory] = useState<string>(data ? data?.sportCategory : data?.sportCategory);
    const [location, setLocation] = useState<string>(data ? data?.location : data?.location);
    const [venu, setVenu] = useState<string>(data ? data?.venu : data?.vanu);
    const [price, setPrice] = useState<string>(data ? data?.price : data?.price);
    const [description, setDescription] = useState<string>(data ? data?.description : data?.description);

    const [updateItem] = useUpdateBookingItemsMutation()

    console.log(title, data?.title, price, venu, location, "alll data")

    const updateBookingItem = () => {
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


                const imageUrl = result.secure_url;
                const updateData = {
                    title,
                    sportCategory,
                    location,
                    venu,
                    price,
                    description,
                    img: imageUrl
                }

                if (result) {
                    try {
                        const res = await updateItem({ body: updateData, id }).unwrap();
                        console.log(res, data)
                        if (res?.id) {
                            setLoading(false)
                            router.push("/manage-booking");
                            message.success("Booking Item update successfully!");
                        }
                        setLoading(false)
                        console.log(res);
                    } catch (err: any) {
                        setLoading(false)
                        console.error(err.message);
                        setError(err?.message)
                    }

                }

                console.log(result, updateData, "good ok")

            })
    }


    return (
        <div>
            <div>
                <h1>
                    <span className='text2 text-3xl '>
                        Edite Booking Item
                    </span>
                </h1>
            </div>
            <div className='flex mt-5 md:p-6 items-center font-reem justify-center'>
                <div className='max-w-[300px] mx-auto'>
                    <div className='rounded-xl border overflow-hidden max-h-[200px] border-dashed border-[#7f54e6b9]'>
                        {!image && <Image src={data?.img} width={1000} height={1000} alt='image' />}
                        {image && <Image src={image?.image} width={1000} height={1000} alt='image' />}
                    </div>
                    <UploadPhoto setImage={setImage} setImg={setImg} />
                </div>
            </div>
            <div className='p-5 rounded-md bg-[#8b52f50c]'>
                <div>
                    <div className='md:flex items-center w-full md:my-2 gap-x-2'>
                        <InputText label={"Title"} value={title} setValue={setTitle} />
                        <InputText label={"Location"} value={location} setValue={setLocation} />
                    </div>
                    <div className='md:flex items-center w-full my-5 gap-x-2'>
                        <SelectField label={"Category"} value={sportCategory} optionData={bookingCategory} setValue={setSportCategory} />
                        <InputText label={"Venu"} value={venu} setValue={setVenu} />
                    </div>
                    <div className='md:flex items-center w-full my-5 gap-x-2'>
                        <InputText label={"Price"} value={price} setValue={setPrice} />
                    </div>
                    <div>
                        <TextAreaField label={"Description"} value={description} setValue={setDescription} />
                    </div>
                </div>
                {error && (
                    <p className="text-red-500 font-Oswald mb-2">
                        <small>{error}</small>
                    </p>
                )}
                {
                    !loading &&
                    <button onClick={updateBookingItem} className="flex cursor-pointer text-white w-full sm:w-[300px] mt-5 gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                        <span>Update Booking Item</span>
                    </button>
                }

                <SpinBtn loading={loading} />
            </div>
        </div>
    );
};

export default Page;