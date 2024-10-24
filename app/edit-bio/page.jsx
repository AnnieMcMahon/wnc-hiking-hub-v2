"use client";
import "./edit-bio.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";


function EditBio() {
  const router = useRouter();
  const { currentUser, setCurrentUser, appUsers, setAppUsers } = useGlobal();
  const [bioInfo, setBioInfo] = useState({
    name: currentUser.name,
    bio: currentUser.bio,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = currentUser;
    let newName = e.target.name.value;
    let newAvatar = e.target.avatar.value;
    let newBio = e.target.bio.value;
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

    function handleChange(e) {
      setBioInfo((prevState) => ({
        ...prevState, [e.target.name]: e.target.value,
      }));
    }

  return (
    <div id="edit-bio">
      <h1>Edit Bio</h1>
      <div id="form-area" className="text-box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="newName">Name: </label>
          <input type="text" name="name" id="newName" value={bioInfo.name || ""} onChange={(e) => handleChange(e)}/>
          <br />
          <label htmlFor="newAvatar">Avatar: </label>
          <input type="file" accept="image/*" name="avatar" id="newAvatar" />
          <br />
          <label htmlFor="newBio">Bio: </label>
          <textarea name="bio" id="newBio" value={bioInfo.bio || ""} onChange={(e) => handleChange(e)}/>
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
