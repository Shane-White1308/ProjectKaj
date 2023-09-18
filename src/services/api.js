const apiBaseUrl = process.env.REACT_APP_API_LINK;

const postApi = async (url, bodyParams = {}) => {
    try {
        const res = await fetch(apiBaseUrl + url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            mode: "cors",
            credentials: "include",
            withCredentials: true,
            body: JSON.stringify(bodyParams),
        });

        return await res.json();
    } catch (error) {
        return {
            status: "error",
            code: 503,
            error: error.message,
        };
    }
};

const getDeleteApi = async (url, method) => {
    try {
        const res = await fetch(apiBaseUrl + url, {
            method: method,
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            mode: "cors",
            credentials: "include",
            withCredentials: true,
        });

        return await res.json();
    } catch (error) {
        return {
            status: "error",
            code: 503,
            error: error.message,
        };
    }
};

export const signup = (firstName, lastName, email, password) => {
    return postApi("user/auth/register", {
        firstName,
        lastName,
        email,
        password,
    });
};

export const login = (email, password) => {
    return postApi("user/auth/login", { email, password });
};

export const authGoogle = (googleToken) => {
    return postApi("user/auth/google/", { googleToken });
};

export const resetPasswordInit = (email) => {
    return postApi("user/reset/password/init", { email });
};

export const resetPassword = (email, otp, password) => {
    return postApi("user/reset/password", { email, otp, password });
};

export const getUser = () => {
    return getDeleteApi("user/", "GET");
};

export const getOtherUser = (id) => {
    return getDeleteApi(`user/${id}`, "GET");
};

export const logoutUser = () => {
    return getDeleteApi("user/logout", "GET");
};

export const getAllCategory = () => {
    return getDeleteApi("category/", "GET");
};

export const getCategoryByName = (name) => {
    return getDeleteApi(`category/name/${name}`, "GET");
};

export const getTopProduct = (count = 10) => {
    return getDeleteApi(`product/top/?count=${count}`, "GET");
};

export const getProductByCategory = (id) => {
    return getDeleteApi(`product/category/${id}`, "GET");
};

export const getProductById = (id) => {
    return getDeleteApi(`product/${id}`, "GET");
};

export const getProductImages = (id) => {
    return getDeleteApi(`image/product/${id}`, "GET");
};

export const getProductFeatures = (id) => {
    return getDeleteApi(`feature/product/${id}`, "GET");
};

export const getProductReviews = (id) => {
    return getDeleteApi(`review/product/${id}`, "GET");
};

export const getProductReviewSummary = (id) => {
    return getDeleteApi(`review/product/${id}/summary`, "GET");
};

export const addToCart = (id, quantity = 1) => {
    return postApi("cart/", { product: id, quantity });
};

export const getCartItems = () => {
    return getDeleteApi("cart/", "GET");
};

export const updateCartItem = (id, quantity) => {
    return postApi(`cart/${id}`, { quantity });
};

export const deleteCartItem = (id) => {
    return getDeleteApi(`cart/${id}`, "DELETE");
};
