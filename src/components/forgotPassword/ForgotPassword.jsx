import { useState } from "react";
import { Link } from "react-router-dom";
import {
    resetPasswordInit as initApi,
    resetPassword as resetApi,
} from "../../services/api";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const [otpSent, setOtpSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!otpSent) {
            const response = await initApi(email);

            if (response.status === "ok") {
                setOtpSent(true);
                setError("");
            } else {
                setError(response.error);
            }
        } else {
            const response = await resetApi(email, otp, password);

            if (response.status === "ok") {
                navigate("/login", { replace: true });
            } else {
                setError(response.error);
            }
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-yellow-500">
                    Reset password
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
                                    contentEditable={!otpSent}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {otpSent && (
                            <>
                                <div>
                                    <label
                                        htmlFor="otp"
                                        className="block text-sm font-medium leading-6 text-yellow-500"
                                    >
                                        OTP
                                    </label>

                                    <div className="mt-2">
                                        <input
                                            id="otp"
                                            type="number"
                                            value={otp}
                                            onChange={(e) =>
                                                setOtp(e.target.value)
                                            }
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-yellow-500"
                                    >
                                        Password
                                    </label>

                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            type="password"
                                            autoComplete="new-password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-full bg-yellow-500 p-3 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {otpSent ? "Reset" : "Send OTP"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Go back?{" "}
                        <Link
                            to="/login"
                            className="font-semibold leading-6 text-yellow-500 hover:text-yellow-400"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
