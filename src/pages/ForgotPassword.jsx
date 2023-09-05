import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import ForgotPasswordComponent from "../components/forgotPassword/ForgotPassword";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    return (
        <>
            <Navbar />
            <ForgotPasswordComponent />
            <Footer />
        </>
    );
};

export default ForgotPassword;
