'use client';
import Image from "next/image";

import Hike from "../components/Hike";
import hikes from "../assets/hikes";
import './bio.css';

function Bio() {
  return (
    <div id="bio">
      <div className="bio-section">
        <div className="bio-header-section">
          <Image className="avatar" src='/avatar1.png' alt="avatar" width="15" height="15"/>
          <h1>Annie McMahon</h1>
          <button>Edit Bio</button>
        </div>
        <div className="bio-text-section">
          <h2>About Me</h2>
          <div id="bio-text" className="text-box">
            <p>
              Bio text goes here ... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem reprehenderit assumenda quibusdam iste eos
              exercitationem molestias nulla fuga repellat incidunt ullam
              cupiditate necessitatibus quidem debitis dolorum nesciunt labore
              quos, laboriosam tempora qui tempore quo velit! Libero quod
              eligendi at eum.
            </p>
          </div>
        </div>
      </div>

      <div className="hike-section">
        <h2>My Hikes - Coming Up</h2>
        <div>
          <Hike hikeType="created" hikeInfo={hikes[0]}/>
          <Hike hikeType="joined" hikeInfo={hikes[1]}/>
        </div>
        <h2>My Hikes - History</h2>
        <div>
          <Hike hikeType="history" hikeInfo={hikes[2]}/>
          <Hike hikeType="history" hikeInfo={hikes[3]}/>
          <Hike hikeType="history" hikeInfo={hikes[4]}/>
        </div>
      </div>
    </div>
  );
}
export default Bio;
