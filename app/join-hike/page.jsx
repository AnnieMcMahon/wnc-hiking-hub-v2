"use client";

import Hike from "@/app/components/Hike";
import { useGlobal } from "../context/GlobalContext";

import "./join-hike.css";

function JoinHike() {
  const { hikes, currentUser } = useGlobal();
  const currentDate = Date.now();
  const hikeSection = hikes.map((hike) => {
    const hikeDate = new Date(hike.date);
    if (hikeDate >= currentDate) {
      if (hike.creator !== currentUser.id) {
        if (currentUser.hikes.indexOf(hike.id) == -1) {
          if (!hike.title.includes("CANCELLED"))
          return <Hike hikeType="available" hikeInfo={hike} key={hike.id}  />;
        }
      }
    }
  });

  return (
    <div id="join-hike">
      <h3>Select a hike you would like to join:</h3>
      <div className="hike-section">{hikeSection}</div>
    </div>
  );
}
export default JoinHike;
