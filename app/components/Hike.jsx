"use client";
import { useGlobal } from "../context/GlobalContext";
import allTrails from "../assets/allTrails";

function Hike({hikeType, hikeInfo}) {
  const { appUsers } = useGlobal();
  let buttonMessage = "";
  if (hikeType === "joined") {
    buttonMessage = "Opt Out";
  } else if (hikeType === "created") {
    buttonMessage = "Edit Hike";
  } else if (hikeType === "available") {
    buttonMessage = "Join Hike";
  }

  const allTrailsInfo = allTrails.find(trail => trail.id == hikeInfo.allTrailsId);
  const hikeCreator = appUsers.find(user => user.id == hikeInfo.creator);

  return (
    <div className="hike">
      <h4>{hikeInfo.title}, with {hikeCreator ? hikeCreator.name : "Unknown"}</h4>
      <h5>{allTrailsInfo.area}</h5>
      <h5>{hikeInfo.date}, {hikeInfo.time}, {hikeInfo.location}</h5>
      <p>{allTrailsInfo.difficulty} * {allTrailsInfo.length} * {allTrailsInfo.elevation} * {allTrailsInfo.type}</p>
      <p>{hikeInfo.comments}</p>
      <a href={allTrailsInfo.link} target="_blank">All Trails Link</a>
      {buttonMessage.length > 0 && <button className="hike-button">{buttonMessage}</button>}
    </div>
  );
}
export default Hike;
