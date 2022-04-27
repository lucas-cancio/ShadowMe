import React, { useState } from "react";
import styles from "./CreateAccountPage.module.css";

function CreateAccountPage() {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");
  const [email, changeEmail] = useState("");
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  const [confirmPassword, changeConfirmPassword] = useState("");

  let handleFirstNameChange = (event) => {
    changeFirstName(event.target.value);
    console.log("First: ", firstName);
  };
  let handleLastNameChange = (event) => {
    changeLastName(event.target.value);
    console.log("Last: ", lastName);
  };
  let handleLEmailChange = (event) => {
    changeEmail(event.target.value);
    console.log("Email: ", email);
  };
  let handleUsernameChange = (event) => {
    changeUsername(event.target.value);
    console.log("Username: ", username);
  };
  let handlePasswordChange = (event) => {
    changePassword(event.target.value);
    console.log("Password: ", password);
  };
  let handleConfirmPasswordChange = (event) => {
    changeConfirmPassword(event.target.value);
    console.log("Confirm Password: ", confirmPassword);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    const newAccountInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    };

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      username == "" ||
      password == "" ||
      confirmPassword != password
    )
      return;

    let result = await fetch("/createAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccountInfo),
    }).then((res) => res.text());
    console.log("DO you work?");
    console.log("Fetch result: ", result);
    if (result) {
      window.location.href = "/dashboard";
    } else {
      console.log("Failure to create account");
    }
  };

  return (
    <div className={styles.PageContainer}>
      <div className={styles.ContentWrapper}>
        <div className={styles.CreateAccountBox}>
          <div className={styles.CreateAccountBoxLeft}>
            <div className={styles.CreateAccountBoxHeader}>Sign Up</div>
            <div className={styles.InputArea}>
              <form autoComplete="on" id="form1">
                <div className={styles.NameInputsContainer}>
                  <div className={styles.LabelNameInput}>
                    <label for="First Name">First Name</label>
                    <input
                      type="text"
                      id="First Name"
                      name="First Name"
                      placeholder="First Name"
                      onChange={handleFirstNameChange}
                    ></input>
                  </div>
                  <div className={styles.LabelNameInput}>
                    <label for="Last Name">Last Name</label>
                    <input
                      type="text"
                      id="Last Name"
                      name="Last Name"
                      placeholder="Last Name"
                      onChange={handleLastNameChange}
                    ></input>
                  </div>
                </div>
                <label for="E-mail Address">E-mail Address</label>
                <input
                  type="text"
                  id="E-mail Address"
                  name="E-mail Address"
                  placeholder="E-mail Address"
                  onChange={handleLEmailChange}
                ></input>
                <label for="Username">Username</label>
                <input
                  type="text"
                  id="Username"
                  name="Username"
                  placeholder="Username"
                  onChange={handleUsernameChange}
                ></input>
                <label for="Password">Password</label>
                <input
                  type="Password"
                  id="Password"
                  name="Password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                ></input>
                <label for="Confirm Password">Confirm Password</label>
                <input
                  type="Password"
                  id="Confirm Password"
                  name="Confirm Password"
                  placeholder="Confirm Password"
                  onChange={handleConfirmPasswordChange}
                ></input>
              </form>
            </div>
          </div>
          <div className={styles.CreateAccountBoxRight}>
            <form id="form2">
              <input
                type="submit"
                value="Create Account"
                form="form1"
                onClick={handleSubmit}
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
