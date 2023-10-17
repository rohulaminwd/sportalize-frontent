"use client"
import UserProfileImg from '../ui/UserProfileImg';
import { getUserInfo } from '@/service/auth.service';
import { useUpdateUserMutation, useUserQuery } from '@/redux/api/userApi';
import { IconPhotoUp, IconUserSquareRounded } from '@tabler/icons-react';
import { useState } from 'react';
import InputText from './InputText';
import PasswordFiled from './PasswordFild';
import SelectField from './SelectField';
import { genderOption } from '@/constants/globals';
import { useForm } from 'react-hook-form';
import UploadPhoto from '../ui/UploadPhoto';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import SpinBtn from '../ui/SpinBtn';


const UpdateProfile = () => {
    const [image, setImage] = useState<any>();
    const [img, setImg] = useState<any>();
    const router = useRouter()
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const userInfo: any = getUserInfo()
    const id = userInfo ? userInfo?.userId : ''
    const { data, isLoading } = useUserQuery(id)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const [firstName, setFirstName] = useState<string>(data ? data?.firstName : data?.firstName)
    const [lastName, setLastName] = useState<string>(data?.lastName ? data?.lastName : data?.lastName)
    const [address, setAddress] = useState<string>(data?.address ? data?.address : data?.address)
    const [gender, setGender] = useState<string>(data?.gender ? data?.gender : data?.gender)
    const [contactNo, setContactNo] = useState<string>(data?.contactNo ? data?.contactNo : data?.contactNo)
    const [newPass, setNewPass] = useState<string>()
    const [currentPass, setCurrentPass] = useState<string>()

    const [updateUser] = useUpdateUserMutation()


    console.log(firstName,
        lastName,
        address,
        contactNo,
        gender, "kisui nai")



    const handleUpdate = async () => {
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


                const profileImg = result.secure_url;
                const userData = {
                    firstName,
                    lastName,
                    address,
                    contactNo,
                    gender,
                    profileImg
                }

                if (result) {
                    try {
                        const res = await updateUser({ body: userData, id }).unwrap();
                        console.log(res, data)
                        if (res?.id) {
                            setLoading(false)
                            router.push("/profile");
                            message.success("Account update successfully!");
                        }

                        console.log(res);
                    } catch (err: any) {
                        setLoading(false)
                        console.error(err.message);
                        setError(err?.message)
                    }

                }

                console.log(result, userData, fromData, profileImg, "good ok")

            })
    }


    const changePass = () => {

    }



    return (
        <div>
            <div className='banner-home-bg overflow-hidden rounded-b-[60px] pb-5  md:rounded-b-[100px]'>
                <div className='bg-search-box backdrop-blur-sm pt-8 p-4'>
                    {!image &&
                        <UserProfileImg
                            className={'w-[100px]  h-[100px] md:w-[150px] bgGradient md:h-[150px] mx-auto ring-purple-700 ring-[6px] ring-offset-base-100 ring-offset-[3px]'}
                            textColor={'text-white text-[40px] sm:text-[60px] font-reem text2 font-bold font-reem'}
                            me={data}
                        />
                    }
                    {
                        image &&
                        <div className='w-[100px] overflow-hidden h-[100px] md:w-[150px] rounded-full bgGradient md:h-[150px] mx-auto ring-purple-700 ring-[6px] ring-offset-base-100 ring-offset-[3px]'>
                            <Image src={image?.image} width={1000} height={1000} alt='image' />
                        </div>
                    }
                    <div className=' flex justify-center text-center md:my-7 my-4'>
                        <UploadPhoto setImage={setImage} setImg={setImg} />
                    </div>
                </div>
            </div>
            <div className='bg-[#6124f079] backdrop-blur-xl p-2 sm:p-4 sm:mx-4 mx-2 -mt-[40px] sm:-mt[60px] rounded-xl'>
                <div className='flex item-center justify-between w-full gap-x-2 md:gap-x-3'>
                    <h1 className='text-left'>
                        <span className='text2 text-[20px] sm:text-[28px]'>Update Personal Information</span>
                    </h1>
                </div>
                <div className='mb-5'>
                    <div className='flex items-center w-full gap-x-2'>
                        <InputText label={"First Name"} value={firstName} setValue={setFirstName} />
                        <InputText label={"Last Name"} value={lastName} setValue={setLastName} />
                    </div>
                    <InputText label={"Email"} value={data?.email} />
                    <InputText label={"Address"} value={address} setValue={setAddress} />
                    <InputText label={"ContactNo"} value={contactNo} setValue={setContactNo} />
                    <SelectField optionData={genderOption} label={"Gender"} value={gender} setValue={setGender} />
                </div>
                {error && (
                    <p className="text-red-500 font-Oswald mb-2">
                        <small>{error}</small>
                    </p>
                )}

                {
                    !loading &&
                    <button onClick={handleUpdate} className="flex cursor-pointer text-white w-full sm:w-[300px] gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                        <span>Update profile</span>
                    </button>
                }
                <SpinBtn loading={loading} />
            </div>
            <div className='bg-[#6124f079] backdrop-blur-xl p-2 sm:p-4 sm:mx-4 mx-2 mt-[24px] sm:-mt[60px] rounded-xl'>
                <div className='flex item-center justify-between w-full md:gap-x-3'>
                    <h1 className='text-left'>
                        <span className='text2 text-[20px] sm:text-[28px]'>Change Password</span>
                    </h1>
                </div>
                <div className='w-full'>
                    <div className='md:flex items-center w-full md:gap-x-2'>
                        <PasswordFiled field={"Current Password"} setValue={setCurrentPass} />
                        <PasswordFiled field={"New Password"} setValue={setNewPass} />
                    </div>
                    {
                        !loading &&
                        <button onClick={changePass} className="flex cursor-pointer text-white w-full sm:w-[300px] mt-5 gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                            <span>Change Password</span>
                        </button>
                    }
                    <SpinBtn loading={loading} />
                </div>
            </div>

        </div >
    );
};

export default UpdateProfile;