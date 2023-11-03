

const SelectField = ({ label, value, setValue, optionData, register, name }: any) => {
    return (
        <div className="font-all text-[#000] w-full mt-2">
            <p className="text-[20px] mt-2 text-left">
                <span className="text-left text2 py-0 font-bold">
                    {label}
                </span>
            </p>
            {
                register ? (
                    <select
                        className=" text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        {...register(name, {
                            required: {
                                value: true,
                                message: `${label} field Required`,
                            },
                        })}
                    >
                        {
                            optionData && optionData && optionData?.map((item: any, index: number) => (
                                <option key={index} value={item.label}>
                                    {item?.label}
                                </option>
                            ))
                        }

                    </select>
                ) : (
                    <select
                        className=" text2 text-xl rounded-md border border-dashed border-[#8954ebb0]  bg-transparent input-md outline-none w-full"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    >
                        {
                            optionData && optionData && optionData?.map((item: any, index: number) => (
                                <option key={index} value={item.label}>
                                    {item?.label}
                                </option>
                            ))
                        }

                    </select>
                )
            }
        </div >
    );
};

export default SelectField;



// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233759.18261824475!2d90.1325222867187!3d23.729998799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85b20807ffb%3A0x2f798ea1d754151f!2sNotre%20Dame%20College&#39;s%20Cricket%20Ground!5e0!3m2!1sen!2sbd!4v1697789525412!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>