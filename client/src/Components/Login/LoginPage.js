import styles from "./LoginPage.module.css";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import JobShadowImage from "../../Art/JobShadowImage.png";

function LoginPage() {
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [msg, changeMsg] = useState("");

  let handleEmailChange = (event) => {
    changeEmail(event.target.value);
    console.log("Email: ", email);
  };

  let handlePasswordChange = (event) => {
    changePassword(event.target.value);
    console.log("Password: ", email);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted");
    const loginInfo = {
      email: email,
    };
    let result = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    }).then((res) => res.text());
    console.log("Response: ", result);

    //if login is successful, change to dashboard page
    if (result) window.location.href = "/dashboard";
    else changeMsg("Incorrect login information");
  };

  return (
    <div className={styles.PageContainer}>
      <div className={styles.ContentWrapper}>
        <div className={styles.LeftSide}>
          <div className={styles.PageHeader}>
            <div className={styles.PageHeaderTitle}>ShadowMe</div>
            <div className={styles.PageHeaderDescription}>
              Shadowing made simply
            </div>
          </div>
          <div className={styles.LoginBox}>
            <div className={styles.LoginBoxHeader}>Sign In</div>
            <div className={styles.SignInArea}>
              <form autoComplete="on">
                <input
                  className={styles.SignInTextInput}
                  type="text"
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="E-mail address"
                ></input>
                <input
                  className={styles.SignInTextInput}
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                ></input>
                <Link
                  to="/forgotPassword"
                  className={styles.ForgotPasswordLink}
                >
                  Forgot Password?
                </Link>
                <Outlet />
                <input
                  type="submit"
                  className={styles.SignInSubmitInput}
                  value="Sign In"
                  onClick={handleSubmit}
                ></input>
              </form>
            </div>
            <div className={styles.SignUpContainer}>
              Don't have an account? &nbsp;
              <Link to="/createAccount" className={styles.CreateAccountLink}>
                Create Account
              </Link>
              {msg}
            </div>
          </div>
        </div>
        <div className={styles.JobShadowImage}>
          <img src={JobShadowImage} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
