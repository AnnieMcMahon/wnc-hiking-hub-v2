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
      {buttonMessage.length > 0 && <button className="hike-button">{buttonMessage}</button>}
      
      <h5>{hikeInfo.day}, {hikeInfo.date}, {hikeInfo.time}</h5>
      <p>Location: {hikeInfo.location}</p>
      <p>{hikeInfo.comments}</p>
      <a href={hikeInfo.allTrailsLink} target="_blank">All Trails Link</a>
    </div>
  );
}
export default Hike;
