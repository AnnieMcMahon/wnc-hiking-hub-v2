"use client";
import AllTrailsPost from "../components/AllTrailsPost";
import ChosenHike from "../components/ChosenHike";
import allTrails from "../assets/allTrails";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import { useRouter } from "next/navigation";
import "./post-hike.css";

function PostHike() {
  const { hikes, setHikes, currentUser, setCurrentUser, appUsers, setAppUsers } = useGlobal();
  const router = useRouter();
  const [chosenHike, setChosenHike] = useState(null);

  function handleClick(trail) {
    setChosenHike(trail);
  };

  function handleSubmit(e) {
    let newHike = {};
    e.preventDefault();
    const newId = hikes[hikes.length - 1].id + 1;
    let newAllTrailsId = -1;
    if (chosenHike) {
      newAllTrailsId = chosenHike.id;
    }
    const newTitle = e.target.hikeTitle.value;
    const newDate = e.target.date.value;
    const newTime = e.target.time.value;
    const newLocation = e.target.location.value;
    const newComments = e.target.comments.value;
    if (
      newAllTrailsId > -1 &&
      newTitle &&
      newDate &&
      newTime &&
      newLocation &&
      newComments
    ) {
      newHike = {
        id: newId,
        creator: currentUser.id,
        allTrailsId: newAllTrailsId,
        title: newTitle,
        date: newDate,
        time: newTime,
        location: newLocation,
        comments: newComments,
      };
      addHikeToState(newHike);
      alert("Hike created");
      router.push("/bio");
    } else {
      alert("Please fill out all the information");
    }
  };

  function addHikeToState(hikeInfo) {
    //Add hike to hikes
    setHikes((hikeList) => [...hikeList, hikeInfo]);
    //Add hike to currentUser's hike list
    let userInfo = currentUser;
    userInfo.hikes.push(Number(hikeInfo.id));
    //Update user
    updateUser(userInfo);
  }

  function updateUser(userInfo) {
    //Update currentUser
    setCurrentUser(userInfo);
    //Update userList
    let userList = [...appUsers];
    const userIndex = userList.findIndex((user) => user.id == userInfo.id);
    userList[userIndex] = userInfo;
    setAppUsers(userList);
  }

  return (
    <div id="post-hike">
      <div className="content">
        <div id="form-area" className="text-box">
          <h2>1. Search for a trail</h2>
          <form>
            <label htmlFor="area">Area: </label>
            <select name="area" id="area">
              <option value="Anywhere in WNC">Anywhere in WNC</option>
              <option value="DuPont State Recreational Forest">
                DuPont State Recreational Forest
              </option>
              <option value="Pisgah National Forest">
                Pisgah National Forest
              </option>
              <option value="North Carolina Arboretum">
                North Carolina Arboretum
              </option>
              <option value="Nantahala Forest">Nantahala Forest</option>
              <option value="Appalachian Trail">Appalachian Trail</option>
              <option value="Mountains-to-Sea Trail">
                Mountains-to-Sea Trail
              </option>
              <option value="Asheville Area">Asheville Area</option>
            </select>
            <br />
            <label htmlFor="length">Length: </label>
            <select name="length" id="length">
              <option value="any">Any length</option>
              <option value="short">Shorter than 3 miles</option>
              <option value="medium">From 3 to 6 miles</option>
              <option value="long">Longer than 6 miles</option>
            </select>
            <label htmlFor="difficulty"> Difficulty: </label>
            <select name="difficulty" id="difficulty">
              <option value="any">Any</option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="strenuous">Strenuous</option>
            </select>
            <br />
            <input
              type="checkbox"
              name="waterfall"
              value="waterfall"
              id="waterfall"
            />
            <label htmlFor="waterfall">Waterfall</label>
            <input type="checkbox" name="view" value="view" id="view" />
            <label htmlFor="view">View</label>
            <input type="checkbox" name="paved" value="paved" id="paved" />
            <label htmlFor="paved">Paved</label>
            <input type="checkbox" name="dogs" value="dogs" id="dogs" />
            <label htmlFor="dogs">Dogs</label>
            <br />
            <button className="form-button">Search</button>
          </form>
          <h2>2. Select a trail from the right column</h2>
          <ChosenHike hikeSelected={chosenHike} />
          <h2>3. Fill out the hike information</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="hikeTitle">Title: </label>
            <input type="text" name="hikeTitle" id="hikeTitle" />
            <br />
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" id="date" />
            <label htmlFor="time"> Time: </label>
            <input type="time" name="time" id="time" />
            <br />
            <label htmlFor="location"> Location: </label>
            <input type="text" name="location" id="location" />
            <br />
            <label htmlFor="comments">Comments: </label>
            <br />
            <textarea type="textarea" name="comments" id="comments" data-gramm="false" />
            <br />
            <button type="submit" className="form-button">
              Submit Form
            </button>
          </form>
        </div>
        <div className="hike-section">
          <h2>Trail Search Results</h2>
          {allTrails.map((trail) => (
            <AllTrailsPost
              hikeInfo={trail}
              key={trail.id}
              onClick={() => handleClick(trail)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default PostHike;
