"use client";
import { useGlobal } from "../context/GlobalContext";
import allTrails from "@/app/assets/allTrails";

function Hike({ hikeType, hikeInfo }) {
  const { appUsers, setAppUsers, currentUser, setCurrentUser } = useGlobal();
  let buttonMessage = "";
  if (hikeType === "joined") {
    buttonMessage = "Opt Out";
  } else if (hikeType === "created") {
    buttonMessage = "Edit Hike";
  } else if (hikeType === "available") {
    buttonMessage = "Join Hike";
  }

  const allTrailsInfo = allTrails.find(
    (trail) => trail.id == hikeInfo.allTrailsId
  );
  const hikeCreator = appUsers.find((user) => user.id == hikeInfo.creator);

  function handleClick(e) {
    let newUserInfo = currentUser;
    switch (e.target.value) {
      case "Join Hike":
        newUserInfo.hikes.push(Number(e.target.name));
        console.log("new user info: ", newUserInfo);
        updateState(newUserInfo);
        alert("Hike added to your hiking list.");
        break;
      case "Opt Out":
        const index = newUserInfo.hikes.indexOf(Number(e.target.name));
        newUserInfo.hikes.splice(index, 1);
        console.log("new user info: ", newUserInfo);
        updateState(newUserInfo);
        alert("Hike removed from your hiking list.");
        break;
      case "Edit Hike":
        alert("editing hike (to be developed)");
        break;
      default:
        console.log("Different button");
    }
  }

  function updateState(newUserInfo) {
    //Update state and localStorage
    const userIndex = appUsers.indexOf(currentUser);
    let newUserList = [...appUsers];
    setCurrentUser(newUserInfo);
    localStorage.setItem("currentUser", JSON.stringify(newUserInfo));
    newUserList[userIndex] = newUserInfo;
    setAppUsers(newUserList);
    console.log(currentUser);
  }

  return (
    <div className="hike">
      <h4>
        {hikeInfo.title}, with {hikeCreator ? hikeCreator.name : "Unknown"}
      </h4>
      <h5>{allTrailsInfo.area}</h5>
      <h5>
        {hikeInfo.date}, {hikeInfo.time}, {hikeInfo.location}
      </h5>
      <p>
        {allTrailsInfo.difficulty} * {allTrailsInfo.length} *{" "}
        {allTrailsInfo.elevation} * {allTrailsInfo.type}
      </p>
      <p>{hikeInfo.comments}</p>
      <a href={allTrailsInfo.link} target="_blank">
        All Trails Link
      </a>
      {buttonMessage.length > 0 && (
        <button
          className="hike-button"
          name={hikeInfo.id}
          value={buttonMessage}
          onClick={(e) => handleClick(e)}
        >
          {buttonMessage}
        </button>
      )}
    </div>
  );
}
export default Hike;
