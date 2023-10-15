

const InfoField = ({ name, value }: any) => {
    return (
        <div className='flex my-1 md:my-2 justify-between px-4 py-2 items-center bg-search-box rounded-lg gap-2 border-y-2 border-[#9564e45d]'>
            <span className='sm:text-xl text2'>{name}</span>
            <span className='sm:text-xl text2'>{value}</span>
        </div>
    );
};

export default InfoField;