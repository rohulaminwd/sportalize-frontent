import React from 'react';

const TextAreaField = ({ label, value, setValue, register, name }: any) => {
    return (
        <div className="font-all w-full mt-2">
            <p className="text-[20px] mt-2 text-left">
                <span className="text-left text2 py-0 font-bold">
                    {label} {label === "Email" ? <span className='text-[16px]'>(Email Address cannot be changed)</span> : ""}
                </span>
            </p>
            <textarea
                placeholder={label}
                required
                className="min-h-[100px] text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...register(name, {
                    required: {
                        value: true,
                        message: `${label} field Required`,
                    },
                })}
            />
        </div>
    );
};

export default TextAreaField;