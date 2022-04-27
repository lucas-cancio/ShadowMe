import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login/LoginPage.js";
import ForgotPasswordPage from "./Components/ForgotPassword/ForgotPasswordPage.js";
import CreateAccountPage from "./Components/CreateAccount/CreateAccountPage.js";
import Dashboard from "./Components/Dashboard/dashboard.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
