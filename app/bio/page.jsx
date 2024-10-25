"use client";
import Image from "next/image";
import Hike from "../components/Hike";
import "./bio.css";
import { useGlobal } from "../context/GlobalContext";
import { useRouter } from "next/navigation";

function Bio() {
  const { currentUser, hikes } = useGlobal();
  const router = useRouter();
  const upcomingHikes = [];
  const pastHikes = [];
  const createdHikes = [];
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  hikes.map((hike) => {
    let hikeDate = new Date(hike.date);
    hikeDate.setHours(0, 0, 0, 0);
    if (currentUser.hikes.indexOf(hike.id) !== -1) {
      if (hikeDate < currentDate) {
        pastHikes.push(hike);
      } else {
        upcomingHikes.push(hike);
      }
      if (hike.creator == currentUser.id) {
        createdHikes.push(hike.id);
      }
    }
  });
  const upcomingHikeSection = upcomingHikes.map((hike) => {
    return (
      <Hike
        hikeType={createdHikes.includes(hike.id) ? "created" : "joined"}
        cancelled={hike.title.includes("CANCELLED") ? true : false}
        hikeInfo={hike}
        key={hike.id}
      />
    );
  });
  const pastHikeSection = pastHikes.map((hike) => {
    return (
      <Hike
        hikeType="history"
        hikeInfo={hike}
        key={hike.id}
        cancelled={hike.title.includes("CANCELLED") ? true : false}
      />
    );
  });

  function handleClick() {
    router.push("/edit-bio");
  }

  return (
    <div id="bio">
      <div className="bio-section">
        <div className="bio-header-section">
          <Image
            className="avatar"
            src={currentUser.avatar}
            alt="avatar"
            width="15"
            height="15"
          />
          <h1>{currentUser.name}</h1>
          <button onClick={handleClick}>Edit Bio</button>
        </div>
        <div className="bio-text-section">
          <h2>About Me</h2>
          <div id="bio-text" className="text-box">
            <p>{currentUser.bio}</p>
          </div>
        </div>
      </div>

      <div className="hike-section">
        <h2>My Hikes - Coming Up</h2>
        <div>{upcomingHikeSection}</div>
        <h2>My Hikes - History</h2>
        <div>{pastHikeSection}</div>
      </div>
    </div>
  );
}

export default Bio;
