"use client";
import "./login.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";

function Login() {
  const router = useRouter();
  const { setCurrentUser, appUsers, setAppUsers } = useGlobal();
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = e.target.userEmail.value.trim();
    const userPassword = e.target.userPassword.value;

    if (!userEmail || !userPassword) {
      setErrorMessage("E-mail and/or password missing");
      return;
    }

    const userInfo = appUsers.find((user) => user.email === userEmail);
    if (userInfo) {
      if (userInfo.password === userPassword) {
        setCurrentUser(userInfo);
        router.push("/bio");
      } else {
        setErrorMessage("Invalid password. Please try again.");
      }
    } else {
      handleNewAccount(userEmail, userPassword);
    }
  }

  function handleNewAccount(email, password) {
    if (confirm("No account found. Would you like to create one?")) {
      const newUserId = appUsers[appUsers.length - 1]?.id + 1 || 1;
      const newUser = {
        id: newUserId,
        email,
        password,
        name: `Avid Hiker #${newUserId}`,
        avatar: "/newUser.png",
        bio: "Enter your bio description here",
        hikes: [],
      };
      setAppUsers((existingUsers) => [...existingUsers, newUser]);
      setCurrentUser(newUser);
      router.push("/bio");
    }
  }

  return (
    <div id="login">
      <h1>Log In</h1>
      <div id="login-info" className="text-box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="userEmail">E-mail: </label>
          <input type="email" name="email" id="userEmail" autoComplete="true" />
          <br />
          <label htmlFor="userPassword">Password: </label>
          <input
            type="password"
            name="password"
            id="userPassword"
            autoComplete="false"
          />
          <br />
          <button type="submit" className="form-button">
            Log In
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
export default Login;
