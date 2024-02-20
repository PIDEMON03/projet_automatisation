import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 xl:p-16">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;