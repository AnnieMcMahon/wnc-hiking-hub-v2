function Hike({hikeType, hikeInfo}) {
  let buttonMessage = "";
  if (hikeType === "joined") {
    buttonMessage = "Opt Out";
  } else if (hikeType === "created") {
    buttonMessage = "Edit Hike";
  } else if (hikeType === "available") {
    buttonMessage = "Join Hike";
  }

  return (
    <div className="hike">
      <h4>{hikeInfo.title}, with {hikeInfo.creator}</h4>
      <h5>{hikeInfo.day}, {hikeInfo.date}, {hikeInfo.time}</h5>
      <p>Location: {hikeInfo.location}</p>
      <p>{hikeInfo.comments}</p>
      <a href={hikeInfo.allTrailsLink} target="_blank">All Trails Link</a>
      {buttonMessage.length > 0 && <button className="hike-button">{buttonMessage}</button>}
    </div>
  );
}
export default Hike;
