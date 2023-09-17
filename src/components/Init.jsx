import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../redux/reducer/auth";
import { addItems as addItemsAction } from "../redux/reducer/cart";
import {
    getUser as getUserApi,
    getCartItems as getCartItemsApi,
} from "../services/api";

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

    useEffect(() => {
        const run = async () => {
            const response = await getCartItemsApi();

            if (response.status === "ok") {
                const items = response.carts.map((item) => ({
                    id: item._id,
                    product: item.product,
                    quantity: item.quantity,
                }));

                dispatch(addItemsAction({ items }));
            }
        };

        run();
    }, []);

    return <></>;
};

export default Init;
