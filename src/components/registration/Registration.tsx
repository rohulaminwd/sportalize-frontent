"use client"

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import PersonalInfo from "./PersonalInfo";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { useUserSignupMutation } from "@/redux/api/authApi";

const Registration = () => {
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const [userSignUP] = useUserSignupMutation()



    const onSubmit = async (data: any) => {
        setLoading
        delete data.confirmPass;
        try {
            const res = await userSignUP({ ...data }).unwrap();
            console.log(res, data)
            if (res?.id) {
                setLoading(false)
                router.push("/");
                message.success("Account created successfully!");
                reset()
            }

            console.log(res);
        } catch (err: any) {
            setLoading(false)
            console.error(err.message);
            setError(err?.message)
        }
    };

    return (
        <div className="h-full">
            <div
                className="w-full backdrop-blur-sm  my-auto mx-auto md:w-[500px] shadow-2xl shadow-[#78e3eba8] gradient1 p-3 sm:p-5"
                data-aos="zoom-in-left"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                <div className="text-center">

                    <p className="text-xl py-3 text-left sm:mb-2 font-bold font-all">
                        <span className="text2">SignUp Now</span>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <PersonalInfo
                                register={register}
                                errors={errors}

                            />
                        </div>
                        {error && (
                            <p className="text-red-500 font-Oswald mb-2">
                                <small>{error}</small>
                            </p>
                        )}

                        <div className="w-full">
                            <input
                                className="btn w-full text-purple-300 uppercase font-bold bg-gradient-to-r from-[#1f7fa5e8] to-[#7034df] hover:from-[#8155e9e7] hover:to-[#267da0e3] duration-300 border-0"
                                type="submit"
                                value="Submit"
                            />
                        </div>
                    </form>

                    <div className="divider after:bg-purple-300 before:bg-purple-300 text2 !mb-1">OR</div>

                    <div className="flex sm:mt-5 font-all items-center font-bold justify-between">
                        <div>
                            <Link href="/">
                                <h6 className="flex text-white items-center gap-1 text2">
                                    <AiOutlineArrowLeft />
                                    Back to Home
                                </h6>
                            </Link>
                        </div>
                        <div>
                            <Link href="/login">
                                <h6 className="flex text-white items-center gap-1 text2">
                                    Login<AiOutlineArrowRight />
                                </h6>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;