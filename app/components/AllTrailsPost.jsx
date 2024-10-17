function AllTrailsPost({hikeInfo}) {
  return (
    <div className="hike">
      <h4>{hikeInfo.name}</h4>
      <p>Location: {hikeInfo.location}</p>
      <p>Length: {hikeInfo.length} | Duration: {hikeInfo.duration}</p>
      <p>Elevation: {hikeInfo.elevation} | Type: {hikeInfo.type} | Difficulty: {hikeInfo.difficulty}</p>
      <a href={hikeInfo.link} target="_blank">All Trails Link</a>
      <button className="hike-button">select</button>
    </div>
  );
}
export default AllTrailsPost;
