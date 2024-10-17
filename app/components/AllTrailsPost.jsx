function AllTrailsPost({hikeInfo}) {
  return (
    <div className="hike">
      <h4>{hikeInfo.name}</h4>
      <p>{hikeInfo.area}</p>
      <p>{hikeInfo.difficulty} * {hikeInfo.length} * {hikeInfo.elevation} * {hikeInfo.type}</p>
      <a href={hikeInfo.link} target="_blank">All Trails Link</a>
      <button className="hike-button">select</button>
    </div>
  );
}
export default AllTrailsPost;
