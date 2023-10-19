import RegistrantionLeft from "@/components/registration/RegistrantionLeft";
import Registration from "@/components/registration/Registration";


const signUpPage = () => {
    return (
        <div className="registration-bg bg-cover min-h-screen">
            <div className="bg-gradient-trasparent flex justify-center sm:items-center items-start bg-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-full z-10 shadow-md">
                        <RegistrantionLeft />
                    </div>
                    <div className="h-full">
                        <Registration />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signUpPage;