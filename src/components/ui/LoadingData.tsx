import { Spin } from "antd";


const LoadingData = ({ loading }: any) => {
    return (
        <>
            {
                loading &&
                <div className="mt-8">
                    <Spin tip="Loading Data" className="text-[#734bdf]">
                        <div className="content" />
                    </Spin>
                </div>
            }
        </>
    );
};

export default LoadingData;