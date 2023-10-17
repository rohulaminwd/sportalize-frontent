'use client'
import InputText from '../profile/InputText';
import TextAreaField from '../profile/TextAreaField';
import SelectField from '../profile/SelectField';
import { bookingCategory } from '@/constants/bookingCategory';

const BookingFromData = ({ register }: any) => {
    return (
        <div className=''>
            <div className='md:flex items-center w-full md:my-2 gap-x-2'>
                <InputText label={"Title"} name={"title"} register={register} />
                <InputText label={"Location"} name="location" register={register} />
            </div>
            <div className='md:flex items-center w-full my-5 gap-x-2'>
                <SelectField label={"Category"} name={"sportCategory"} optionData={bookingCategory} register={register} />
                <InputText label={"Venu"} name="venu" register={register} />
            </div>
            <div className='md:flex items-center w-full my-5 gap-x-2'>
                <InputText label={"Price"} name={"price"} register={register} />
            </div>
            <div>
                <TextAreaField label={"Description"} name="description" register={register} />

            </div>
        </div>
    );
};

export default BookingFromData;