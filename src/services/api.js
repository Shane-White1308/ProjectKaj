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

        const data = await res.json();

        return data;
    } catch (error) {
        return {
            status: "error",
            code: 503,
            error: error.message,
        };
    }
};

export const signup = (firstName, lastName, email, password) => {
    return postApi("user/register/", { firstName, lastName, email, password });
};

export const login = (email, password) => {
    return postApi("user/login/", { email, password });
};

export const authGoogle = (googleToken) => {
    return postApi("user/auth/google/", { googleToken });
};

export const resetPasswordInit = (email) => {
    return postApi("user/reset/init/", { email });
};

export const resetPassword = (email, otp, password) => {
    return postApi("user/reset/", { email, otp, password });
};

export const getUser = () => {
    return postApi("user/");
};
