"use client";
import "./login.css";
// import appUsers from '../assets/appUsers';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    const userEmail = e.target.value;
  }

  return (
    <div id="login">
      <h1>Log In</h1>
      <div id="login-info" className="text-box">
        <h2>Fill out the information</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="userEmail">E-mail: </label>
          <input type="email" name="email" id="userEmail" autoComplete="true" />
          <button type="submit" className="enter-button">
            Enter
          </button>
        </form>
        <br />

        <br />
        <br />
        {/* <button type="submit" className="form-button">Submit Form</button> */}
      </div>
    </div>
  );
}
export default Login;
