"use client";
import "./edit-bio.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";

function EditBio() {
  const router = useRouter();
  const { currentUser, setCurrentUser, appUsers, setAppUsers } = useGlobal();

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = currentUser;
    let newEmail = e.target.email.value;
    let newName = e.target.name.value;
    let newAvatar = e.target.avatar.value;
    let newBio = e.target.bio.value;
    if (newEmail) newInfo.email = newEmail;
    if (newName) newInfo.name = newName;
    if (newAvatar) newInfo.avatar = newAvatar;
    if (newBio) newInfo.bio = newBio;
      const userIndex = appUsers.indexOf(currentUser);
      setCurrentUser(newInfo);
      localStorage.setItem('currentUser', JSON.stringify(newInfo));
      let newUserList = [...appUsers]; 
      newUserList[userIndex] = newInfo;
      setAppUsers(newUserList);
      router.push("/bio");
    }

    function handleClick() {
      router.push("/edit-bio");
    }

  return (
    <div id="edit-bio">
      <h1>Edit Bio</h1>
      <div id="form-area" className="text-box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="newEmail">E-mail: </label>
          <input type="email" name="email" id="newEmail" autoComplete="true" />
          <br />
          <label htmlFor="newName">Name: </label>
          <input type="text" name="name" id="newName"/>
          <br />
          <label htmlFor="newAvatar">Avatar: </label>
          <input type="file" accept="image/*" name="avatar" id="newAvatar"/>
          <br />
          <label htmlFor="newBio">Bio: </label>
          <textarea name="bio" id="newBio"/>
          <br />
          <button type="submit" className="form-button">
            Save
          </button>
          <button onClick={handleClick} className="form-button">
            Discard
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditBio;
