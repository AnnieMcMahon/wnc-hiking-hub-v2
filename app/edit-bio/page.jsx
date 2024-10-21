"use client";
import "./login.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";

function EditBio() {
  const router = useRouter();
  const { currentUser } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    // const userEmail = e.target.userEmail.value;
    // const userPassword = e.target.userPassword.value;
    // let userStatus = "";
    // if (userEmail.length > 0 && userPassword.length > 0) {
    //   const userInfo = appUsers.find((user) => user.email == userEmail);
    //   if (userInfo) {
    //     if (userInfo.password == userPassword) {
    //       setCurrentUser(userInfo);
    //       localStorage.setItem('currentUser', JSON.stringify(userInfo));
    //       router.push("/bio");
    //     } else {
    //       userStatus = "password";
    //       alert("Please enter a valid password");
    //     }
    //   } else {
    //     userStatus = "new";
    //     if (confirm("Create new account?")) {
    //       createNewAccount(userEmail, userPassword);
    //     }
    //   }
    // } else {
    //   alert("E-mail and/or password missing");
    // }
  }

  return (
    <div id="edit-bio">
      <h1>Edit Bio</h1>
      <div id="bio-info" className="text-box">
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
export default EditBio;
