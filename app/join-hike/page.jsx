"use client";

import Hike from "@/app/components/Hike";
import { useGlobal } from '../context/GlobalContext';

import './join-hike.css';

function JoinHike() {
  const { hikes } = useGlobal();
  console.log("Hikes from context:", hikes);
  console.log("First hike from context:", hikes[0]);
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
