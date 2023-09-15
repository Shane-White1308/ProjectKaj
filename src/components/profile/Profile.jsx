import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Profile = () => {

    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login", { replace: true });
        }
    }, [user, navigate]);

    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default Profile