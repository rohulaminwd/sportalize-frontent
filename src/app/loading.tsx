
import FootballLoading from "@/components/ui/FootballLoading";
// import { Row, Space, Spin } from "antd";

const Loading = () => {
    return (
        <div className="h-screen w-full bg-[#f2f2f7] flex justify-center items-center">
            <div className='w-[300px] md:w-[500px] mx-auto'>
                <FootballLoading />
            </div>
        </div>
    );
};

export default Loading;
