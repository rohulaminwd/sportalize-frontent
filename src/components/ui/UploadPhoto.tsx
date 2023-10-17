"use client"

import { IconPhotoUp } from '@tabler/icons-react';
import { useRef, useState } from 'react';

const UploadPhoto = ({ setImage, setImg }: any) => {
    const imageRef = useRef<any>();
    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg(img);
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };



    return (
        <div>
            <div onClick={() => imageRef.current.click()} className="flex px-4 mt-5 cursor-pointer gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                <input
                    type="file"
                    className='hidden'
                    name="images"
                    onChange={onImageChange}
                    ref={imageRef}
                    id=""
                />
                <span className='text-white hidden sm:block'> <IconPhotoUp size={24} /> </span>
                <span className="text2">Upload Photo</span>
            </div>
        </div>
    );
};

export default UploadPhoto;