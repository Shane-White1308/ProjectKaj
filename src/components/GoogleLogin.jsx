import { useEffect } from "react";

const GoogleLogin = ({ onSuccess, onError, onLoad }) => {
    useEffect(() => {
        loadScript();
    }, []);

    const loadScript = () => {
        const script = document.createElement("script");

        script.src = "https://accounts.google.com/gsi/client";

        script.onload = handleLoadSuccess;
        script.onerror = onError;

        document.head.appendChild(script);
    };

    function handleCredentialResponse(response) {
        onSuccess(response.credential);
    }

    const handleLoadSuccess = () => {
        onLoad();

        const google = window.google;
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("googleLoginButton"),
            {
                theme: "filled_black",
                size: "large",
                shape: "pill",
                text: "signin_with",
            }
        );

        google.accounts.id.prompt();
    };

    return (
        <div
            style={{ width: "max-content", margin: "auto" }}
            id="googleLoginButton"
        />
    );
};

export default GoogleLogin;
