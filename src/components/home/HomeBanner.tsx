"use client"

import React from "react";
import sports from "../../assets/lottie/sports.json";
import Lottie from "lottie-react";
import Link from "next/link";
import FromTextInput from "../registration/FromTextInput";
import BannerSerchCard from "./BannerSerchCard";
import { IconUserSquareRounded, IconAddressBook } from '@tabler/icons-react';
import { isLoggedIn } from "@/service/auth.service";

const HomeBanner = () => {
    const isLogin = isLoggedIn()
    return (
        <div className="pt-12">
            <div className="banner-home-bg bg-cover">
                <div className=" lg:py-8 -z-10  bg-gradient-trasparent lg:w-full">
                    <div className="hero">
                        <div style={{ justifyContent: "space-between" }} className="hero-content justify-between px-2 sm:px-4 md:px-8 lg:px-16 flex-col flex-row-revers">

                            <div className="ox-hidden font-Oswald text-center mb-5 md:mb-0 -order-3 md:order-3">
                                <h1
                                    className="text-[32px] font-Oswald font-extrabold py-4 font-all pt-4 sm:mb-5 md:mt-2 sm:text-4xl md:text-[56px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
                                    data-aos="zoom-in-up"
                                    data-aos-delay="300"
                                    data-aos-duration="800"
                                >
                                    Book Playgrounds with Ease
                                </h1>

                                <p
                                    className="my-1 font-all font-reem text-center font-bold sm:text-3xl md:my-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e6a9f5] lg:my-4 "
                                    data-aos="zoom-in-up"
                                    data-aos-delay="500"
                                    data-aos-duration="800"
                                >
                                    Your Gateway to Adventure. Reserve now for seamless playtime fun, and embark on a journey of joy, laughter, and unforgettable memories
                                </p>
                                <div
                                    className="flex justify-center mt-8 font-all"
                                    data-aos="zoom-in-right"
                                    data-aos-delay="800"
                                    data-aos-duration="800"
                                >
                                    <Link href={isLogin ? "/profile" : "/signup"} className="btn btn-outline btn-circle text-xl btn-wide border-2 btn-primary duration-300 bg-gradient-to-r from-blue-700 to-cyan-700">
                                        <span style={{ marginRight: "0px" }} className='font-Oswald text-[10px] text-white'>{isLogin ? <IconAddressBook /> : <IconUserSquareRounded />} </span>
                                        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-white">{isLogin ? "Start Now" : "Sign Up"}</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-10">
                        <BannerSerchCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
