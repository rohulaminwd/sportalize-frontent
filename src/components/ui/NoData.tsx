import { IconDatabaseX } from '@tabler/icons-react';


const NoData = ({ data, loading }: any) => {
    return (
        <>
            {
                (!(data?.length >= 0) && !loading) &&
                <div className='w-full flex items-center justify-center'>
                    <div className='p-5'>
                        <span className='text-[#7451f1]'><IconDatabaseX size={80} /></span>
                        <span className='text-2xl font-reem text-[#7451f1]'>No Data</span>
                    </div>
                </div>
            }
        </>
    );
};

export default NoData;