import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import SignupComponent from "../components/signup/Signup";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
            <SignupComponent />
            <Footer />
        </>
    );
};

export default Signup;
