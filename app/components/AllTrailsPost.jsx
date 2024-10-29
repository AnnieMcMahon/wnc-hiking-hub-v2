"use client";
import "./AllTrailsPost.css";
import "./Hike.css";

function AllTrailsPost({hikeInfo, onClick}) {
  return (
    <div id="AllTrailsPost" className="hike" onClick={onClick}>
      <h4>{hikeInfo.name}</h4>
      <p>{hikeInfo.area}</p>
      <p>{hikeInfo.difficulty} * {hikeInfo.length} * {hikeInfo.elevation} * {hikeInfo.type}</p>
      <a href={hikeInfo.link} target="_blank" onClick={(e) => e.stopPropagation()}>All Trails Link</a>
    </div>
  );
}
export default AllTrailsPost;
