"user client"


import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

const PasswordFiled = ({ setValue, field }: any) => {
    const [showPass, setshowPass] = useState<boolean>(false);
    const [passType, setPassType] = useState<string>("password");

    const handleShowPass = () => {
        setshowPass(!showPass);
        setPassType(passType === "password" ? "text" : "password")
    }
    return (
        <div className="form-control mb-5 w-full">

            <p className="text-[20px] mt-2 text-left">
                <span className="text-left text2 py-0 font-bold">
                    {field}
                </span>
            </p>
            <div className='relative w-full'>
                <input
                    type="password"
                    placeholder={field}
                    required
                    className=" text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                    onChange={(e) => setValue(e.target.value)}
                />
                <div onClick={handleShowPass} className={`${showPass ? "text-purple-700" : "text-purple-400 "} cursor-pointer  absolute top-[12px] right-2`}>
                    {showPass ? <BiShow size={24} /> : <BiHide size={24} />}
                </div>
            </div>
        </div>

    );
};

export default PasswordFiled;