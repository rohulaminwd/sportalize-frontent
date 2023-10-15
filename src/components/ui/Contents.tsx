"use client"
import { Layout } from "antd"
import Header from "./Header";
const { Content } = Layout


const Contents = ({ children }: { children: React.ReactNode }) => {
    const base = "admin"
    return (
        <Content className="dashboard-content-bg" style={{
            minHeight: "100vh"
        }}>
            <div className="bg-[#220c4db6] min-h-screen">
                <Header />

                <div
                    style={{
                        padding: "10px",
                    }}

                >
                    {children}
                </div>
            </div>
        </Content>
    );
};

export default Contents;