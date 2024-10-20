'use client';
import Image from "next/image";
import Hike from "../components/Hike";
import hikes from "../assets/hikes";
import './bio.css';
import { useGlobal } from '../context/GlobalContext';

function Bio() {
  const { currentUser } = useGlobal();

  if (!currentUser) {
    return <p>Loading...</p>; // Handle the case where the user is not yet loaded
  }

  return (
    <div id="bio">
      <div className="bio-section">
        <div className="bio-header-section">
          <Image className="avatar" src={currentUser.avatar} alt="avatar" width="15" height="15" />
          <h1>{currentUser.name}</h1>
          <button>Edit Bio</button>
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
        <div>
          <Hike hikeType="created" hikeInfo={hikes[0]} />
          <Hike hikeType="joined" hikeInfo={hikes[1]} />
        </div>
        <h2>My Hikes - History</h2>
        <div>
          <Hike hikeType="history" hikeInfo={hikes[2]} />
          <Hike hikeType="history" hikeInfo={hikes[3]} />
          <Hike hikeType="history" hikeInfo={hikes[4]} />
        </div>
      </div>
    </div>
  );
}

export default Bio;
