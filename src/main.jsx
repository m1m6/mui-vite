// Polyfills
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";
import "./i18n";
import { AuthContextProvider } from "./store/auth-context";
import { ThemeContextProvider } from "./store/theme-context";
import GlobalStyle from "./styles/App.styled";
import NetworkStatus from "./components/NetworkStatus/NetworkStatus";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthContextProvider>
            <ThemeContextProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={ () => window.location.reload(false) } >
                        <NetworkStatus />
                        <App />
                    </ErrorBoundary>
                </BrowserRouter>
            </ThemeContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);
