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
    return postApi("user/auth/register", { firstName, lastName, email, password });
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

export const logoutUser = () => {
    return getDeleteApi("user/logout", "GET");
};

export const getAllCategory = () => {
    return getDeleteApi("category/", "GET");
};

export const getProductByCategory = (categoryId) => {
    return getDeleteApi(`product/category/${categoryId}`, "GET");
};
