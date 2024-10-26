"use client";

function ChosenHike({hikeSelected}) {
  if (hikeSelected) {
    return (
      <div id="chosen-hike" className="hike">
        <h4>{hikeSelected.name}</h4>
        <p>{hikeSelected.area}</p>
        <p>
          {hikeSelected.difficulty} * {hikeSelected.length} *{" "}
          {hikeSelected.elevation} * {hikeSelected.type}
        </p>
        <a
          href={hikeSelected.link}
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          All Trails Link
        </a>
      </div>
    );
  } else {
    return (
      <div id="chosen-hike-placeholder" className="hike">
        <h2>Choose a trail</h2>
      </div>
    );
  }
}

export default ChosenHike;