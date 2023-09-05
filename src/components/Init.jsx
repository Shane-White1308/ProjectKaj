import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducer/auth";
import { getUser as getUserApi } from "../services/api";

const Init = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const run = async () => {
            const response = await getUserApi();

            if (response.status === "ok") {
                dispatch(loginAction(response.user));
            }
        };

        run();
    }, []);

    return <></>;
};

export default Init;
