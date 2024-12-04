import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const LayoutTigo = () => {
    return (
        <>
            <Navbar />
            <main className="pt-5 overflow-auto"> 
                <Outlet />
            </main>
        </>
    );
};

export default LayoutTigo;
