import allTrails from "../assets/allTrails";

function Hike({hikeType, hikeInfo}) {
  let buttonMessage = "";
  if (hikeType === "joined") {
    buttonMessage = "Opt Out";
  } else if (hikeType === "created") {
    buttonMessage = "Edit Hike";
  } else if (hikeType === "available") {
    buttonMessage = "Join Hike";
  }

  const allTrailsInfo = allTrails.find(trail => trail.id == hikeInfo.allTrailsId);

  return (
    <div className="hike">
      <h4>{hikeInfo.title}, with {hikeInfo.creator}</h4>
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
