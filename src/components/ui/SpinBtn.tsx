import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const SpinBtn = ({ loading }: any) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return (
        <div>
            {
                loading && <button className="flex cursor-pointer text-white w-full sm:w-[300px] mt-5 gap-x-2 text-sm rounded-lg p-2 justify-center md:text-lg items-center border-2 border-[#7949e770] bg-btn">
                    <Spin indicator={antIcon} /> Proccesing
                </button>
            }
        </div>
    );
};

export default SpinBtn;