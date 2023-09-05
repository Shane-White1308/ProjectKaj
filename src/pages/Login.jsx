import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import LoginComponent from "../components/login/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
            <LoginComponent />
            <Footer />
        </>
    );
};

export default Login;
