import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage";
import ForgotPasswordPage from "./Components/ForgotPassword/ForgotPasswordPage";
import CreateAccountPage from "./Components/CreateAccount/CreateAccountPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
