"use client";
import "./edit-bio.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";

function EditBio() {
  const router = useRouter();
  const { currentUser } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    // const userEmail = e.target.userEmail.value;
    // const userPassword = e.target.userPassword.value;
  }

  return (
    <div id="edit-bio">
      <h1>Edit Bio</h1>
      <div id="bio-info" className="text-box">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <label htmlFor="userEmail">E-mail: </label>
          <input type="email" name="email" id="userEmail" autoComplete="true" />
          <br />
          <label htmlFor="userPassword">Password: </label>
          <input
            type="password"
            name="password"
            id="userPassword"
            autoComplete="false"
          />
          <br /> */}
          <button type="submit" className="form-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditBio;
