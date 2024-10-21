"use client";
import "./login.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";

function Login() {
  const router = useRouter();
  const { setCurrentUser, appUsers } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;
    let userStatus = "";
    if (userEmail.length > 0 && userPassword.length > 0) {
      const userInfo = appUsers.find((user) => user.email == userEmail);
      if (userInfo) {
        if (userInfo.password == userPassword) {
          setCurrentUser(userInfo);
          localStorage.setItem('currentUser', JSON.stringify(userInfo));
          router.push("/bio");
        } else {
          userStatus = "password";
          alert("Please enter a valid password");
        }
      } else {
        userStatus = "new";
        if (confirm("Create new account?")) {
          createNewAccount(userEmail, userPassword);
        }
      }
    } else {
      alert("E-mail and/or password missing");
    }
  }

  function createNewAccount(newUserEmail, newUserPassword) {
    const newUserId = appUsers[(appUsers.length - 1)].id + 1;
    const newUserName = "Avid Hiker #" + newUserId;
    const newUser = {
      id: newUserId,
      email: newUserEmail,
      password: newUserPassword,
      name: newUserName,
      avatar: "/newUser.png",
      bio: "Enter your bio description here",
      hikes: [],
    };
    appUsers.push(newUser);
    localStorage.setItem('appUsers', JSON.stringify(appUsers));
    setCurrentUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    alert("Account created successfully!");
    router.push("/bio");
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
        </form>
      </div>
    </div>
  );
}
export default Login;
