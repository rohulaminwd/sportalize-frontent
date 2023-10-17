

const SelectField = ({ label, value, setValue, optionData, register, name }: any) => {
    return (
        <div className="font-all w-full mt-2">
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