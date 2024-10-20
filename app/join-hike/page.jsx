import Hike from "@/app/components/Hike";
import hikes from "../assets/hikes";
import './join-hike.css';

function JoinHike() {
  console.log(hikes);
  return (
    <div id="join-hike">
      <h3>Select a hike you would like to join:</h3>
      <div className="hike-section">
        <Hike hikeType="available" hikeInfo={hikes[0]} />
        <Hike hikeType="available" hikeInfo={hikes[1]} />
        <Hike hikeType="available" hikeInfo={hikes[2]} />
        <Hike hikeType="available" hikeInfo={hikes[3]} />
        <Hike hikeType="available" hikeInfo={hikes[4]} />
      </div>
    </div>
  );
}
export default JoinHike;
