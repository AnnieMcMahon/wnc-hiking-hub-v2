import AllTrailsPost from "../components/AllTrailsPost";
import allTrails from "../assets/allTrails";
import './post-hike.css';

function PostHike() {
  return (
    <div id="post-hike">
      <div className="content">
        <div className="form-area">
        <h2>Post a Hike</h2>
          <h4>1. Search for a hike</h4>
          <form>
            <label for="area">Area: </label>
            <input list="area"/>
              <datalist name="area" id="area">
                <option value="Anywhere in WNC"/>
                <option value="Asheville Area"/>
                <option value="DuPont Forest"/>
                <option value="Pisgah Forest"/>
                <option value="Nantahala Forest"/>
                <option value="Appalachian Trail"/>
                <option value="Mountains-to-Sea Trail"/>
              </datalist>
            <br />
            <label for="length">Length: </label>
            <select name="length" id="length">
              <option value="any">Any length</option>
              <option value="short">Shorter than 3 miles</option>
              <option value="medium">From 3 to 6 miles</option>
              <option value="long">Longer than 6 miles</option>
            </select>
            <br />
            <label for="difficulty">Difficulty: </label>
            <select name="difficulty" id="difficulty">
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="strenuous">Strenuous</option>
            </select>
            <br />
            <label>Keywords: </label>
            <input type="checkbox" name="waterfall" value="waterfall" />
            Waterfall
            <input type="checkbox" name="view" value="view" />
            View
            <input type="checkbox" name="paved" value="paved" />
            Paved
            <input type="checkbox" name="dogs" value="dogs" />
            Dogs
            <br />
            <button>Search</button>
          </form>
          <h4>2. Select a hike from the right column</h4>

          <h4>3. Fill out the form information</h4>
          <form>
            <label for="title">Title: </label>
            <input type="text" name="title" id="title" />
            <br />
            <label for="time">Time: </label>
            <input type="text" name="time" id="time" />
            <label for="date"> Date: </label>
            <input type="text" name="date" id="date" />
            <br />

            <label for="comments">Comments: </label>
            <br/>
            <textarea
              type="textarea"
              name="comments"
              id="comments"
            />
            <br />

            <button type="submit">Submit Form</button>
          </form>
        </div>
        <div className="hike-section">
          <h3>Hike Search Results</h3>
          <AllTrailsPost hikeInfo={allTrails[0]} />
          <AllTrailsPost hikeInfo={allTrails[1]} />
          <AllTrailsPost hikeInfo={allTrails[2]} />
          <AllTrailsPost hikeInfo={allTrails[3]} />
          <AllTrailsPost hikeInfo={allTrails[4]} />
        </div>
      </div>
    </div>
  );
}
export default PostHike;
