import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../redux/reducer/auth";
import {
    login as loginApi,
    authGoogle as authGoogleApi,
} from "../../services/api";
import GoogleLogin from "../GoogleLogin";

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const [googleAllowed, setGoogleAllowed] = useState(false);

    const handleGoogleFailure = () => {
        setError("Error continuing with google");
    };

    const handleAuthGoogle = async (credential) => {
        if (!credential) {
            setError("Some error occurred");
        } else {
            const response = await authGoogleApi(credential);

            if (response.status === "ok") {
                dispatch(loginAction(response.user));
            } else {
                setError("Some error occurred");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await loginApi(email, password);

        if (response.status === "ok") {
            dispatch(loginAction(response.user));
        } else {
            setError(response.error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-yellow-500">
                    Login
                </h2>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="rounded-md border border-yellow-700 p-4">
                                <p className="text-white">{error}</p>
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-yellow-500"
                            >
                                Email address
                            </label>

                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6 text-yellow-500"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="/forgot"
                                        className="font-semibold text-yellow-500 hover:text-yellow-400"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    className="pl-1.5 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-full bg-yellow-500 p-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                        </div>
                    </form>

                    {googleAllowed && (
                        <p className="text-lg text-gray-300 text-center my-4">
                            OR
                        </p>
                    )}

                    <GoogleLogin
                        onSuccess={handleAuthGoogle}
                        onError={handleGoogleFailure}
                        onLoad={() => setGoogleAllowed(true)}
                    />

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a user?{" "}
                        <Link
                            to="/signup"
                            className="font-semibold leading-6 text-yellow-500 hover:text-yellow-300"
                        >
                            Create Account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
