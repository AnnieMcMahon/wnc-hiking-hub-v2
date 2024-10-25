"use client";
import "./edit-hike.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";

function EditHike() {
  const router = useRouter();
  const { hikes, hike, setHikes, setHike } = useGlobal();

  const currentHikeInfo = hikes?.find((hikeData) => hikeData.id == hike) || {};
  const [hikeInfo, sethikeInfo] = useState(currentHikeInfo || {
    title: "",
    date: "",
    time: "",
    location: "",
    comments: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (hikeInfo.title && hikeInfo.date && hikeInfo.time && hikeInfo.location && hikeInfo.comments) {
      const hikeIndex = hikes.indexOf(currentHikeInfo);
      let newHikeList = [...hikes];
      newHikeList[hikeIndex] = hikeInfo;
      setHikes(newHikeList);
      localStorage.setItem("hikes", JSON.stringify(newHikeList));
      setHike(hikeInfo);
      localStorage.setItem("hike", JSON.stringify(hikeInfo));
      router.push("/bio");
    } else {
      alert("Please complete all information");
    };
  }

  function handleDiscard() {
    router.push("/bio");
  }

  function handleCancel() {
    const oldTitle = currentHikeInfo.title;
    currentHikeInfo.title = `CANCELLED - ${oldTitle}`;
    const hikeIndex = hikes.indexOf(hike);
    let newHikeList = [...hikes];
    newHikeList[hikeIndex] = hikeInfo;
    setHikes(newHikeList);
    localStorage.setItem("hikes", JSON.stringify(newHikeList));
    setHike(hikeInfo);
    localStorage.setItem("hike", JSON.stringify(hikeInfo));
    alert("Hike has been cancelled.");
    router.push("/bio");
  }

  function handleChange(e) {
    sethikeInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div id="edit-hike">
      <h1>Edit Hike</h1>
      <div id="form-area" className="text-box">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="newTitle">Title: </label>
          <input
            type="text"
            name="title"
            id="newTitle"
            value={hikeInfo.title}
            onChange={(e) => handleChange(e)}
          />
          <br />

          <label htmlFor="newDate">Date: </label>
          <input type="date" name="date" id="newDate" value={hikeInfo.date}
            onChange={(e) => handleChange(e)} />
          <br />

          <label htmlFor="newTime"> Time: </label>
          <input type="time" name="time" id="newTime" value={hikeInfo.time}
            onChange={(e) => handleChange(e)}/>
          <br />

          <label htmlFor="newLocation"> Location: </label>
          <input type="text" name="location" id="newLocation" value={hikeInfo.location}
            onChange={(e) => handleChange(e)}/>
          <br />

          <label htmlFor="newComments">Comments: </label>
          <br />
          <textarea type="textarea" name="comments" id="newComments" value={hikeInfo.comments}
            onChange={(e) => handleChange(e)}/>
          <br />
          <button type="submit" className="form-button">
            Save Changes
          </button>
          <button onClick={handleDiscard} className="form-button">
            Discard Changes
          </button>
          <button onClick={handleCancel} className="form-button">
            Cancel Hike
          </button>
        </form>
      </div>
    </div>
  );
}
export default EditHike;
