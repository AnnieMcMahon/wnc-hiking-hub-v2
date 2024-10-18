"use client";
import "./login.css";
import appUsers from '../assets/appUsers';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = e.target.userEmail.value;
    const userPassword = e.target.userPassword.value;
    let userStatus = "";
    if (userEmail.length > 0 && userPassword.length > 0) {
      const userInfo = appUsers.find(user => user.email == userEmail);
      if (userInfo) {
        if (userInfo.password == userPassword) {
          userStatus = "validated";
        } else {
          userStatus ="password";
        }
      } else {
        userStatus = "new";
      }
    } else {
      console.log("e-mail and/or password missing");
    }
    console.log(userStatus);
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
          <input type="password" name="password" id="userPassword" autoComplete="false" />
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
