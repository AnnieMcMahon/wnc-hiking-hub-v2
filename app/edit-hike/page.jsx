"use client";
import "./edit-hike.css";
import { useRouter } from "next/navigation";
import { useGlobal } from "../context/GlobalContext";
import { useState } from "react";

export default function EditHike() {
  const router = useRouter();
  const { hikes, hike, setHikes, setHike } = useGlobal();

  // Initializing to no data prevents errors in preloading page 
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
      // Update state and localStorage with new hike info
      setHike(hikeInfo);
      localStorage.setItem("hike", JSON.stringify(hikeInfo));
      updateHikes(hikeInfo);
      router.push("/bio");
    } else {
      alert("Please complete all information");
    };
  }

  function handleDiscard() {
    router.push("/bio");
  }

  function handleCancel() {
    if (confirm("Press OK to cancel this hike (cannot be reversed)")) {
    // Add CANCELLED to the hike title and updates State and localStorage
    const oldTitle = currentHikeInfo.title;
    currentHikeInfo.title = `CANCELLED - ${oldTitle}`;
    //Update hike and hikes in state and localStorage
    setHike(hikeInfo);
    localStorage.setItem("hike", JSON.stringify(hikeInfo));
    updateHikes(hikeInfo);
    alert("Hike has been cancelled.");
    router.push("/bio");
    }
  }

function updateHikes(hikeData) {
  let hikeList = [...hikes];
  const hikeIndex = hikeList.findIndex(h => h.id == hikeData.id);
  hikeList[hikeIndex] = hikeData;
  setHikes(hikeList);
  localStorage.setItem("hikes", JSON.stringify(hikeList));
};

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
};
