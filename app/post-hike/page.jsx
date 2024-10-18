import AllTrailsPost from "../components/AllTrailsPost";
import allTrails from "../assets/allTrails";
import './post-hike.css';

function PostHike() {
  return (
    <div id="post-hike">
      <div className="content">
        <div id="form-area" className="text-box">
          <h2>1. Search for a hike</h2>
          <form>
            <label htmlFor="area">Area: </label>
            <input list="area" id="area" name="area" placeholder="Anywhere in WNC"/>
              <datalist name="area">
                <option value="Anywhere in WNC"/>
                <option value="DuPont State Recreational Forest"/>
                <option value="Pisgah National Forest"/>
                <option value="North Carolina Arboretum"/>
                <option value="Nantahala Forest"/>
                <option value="Appalachian Trail"/>
                <option value="Mountains-to-Sea Trail"/>
                <option value="Asheville Area"/>
              </datalist>
            <br />
            <label htmlFor="length">Length: </label>
            <select name="length" id="length">
              <option value="any">Any length</option>
              <option value="short">Shorter than 3 miles</option>
              <option value="medium">From 3 to 6 miles</option>
              <option value="long">Longer than 6 miles</option>
            </select>
            <label htmlFor="difficulty">  Difficulty: </label>
            <select name="difficulty" id="difficulty">
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="strenuous">Strenuous</option>
            </select>
            <br />
            <h2>Keywords: </h2>
            <input type="checkbox" name="waterfall" value="waterfall" id="waterfall" />
            <label htmlFor="waterfall">Waterfall</label>
            <input type="checkbox" name="view" value="view" id="view" />
            <label htmlFor="view">View</label>
            <input type="checkbox" name="paved" value="paved" id="paved" />
            <label htmlFor="paved">Paved</label>
            <input type="checkbox" name="dogs" value="dogs" id="dogs" />
            <label htmlFor="dogs">Dogs</label>
            <br />
            <button className="form-button">Search</button>
          </form>
          <h2>2. Select a hike from the right column</h2>

          <h2>3. Fill out the hike information</h2>
          <form>
            <label htmlFor="hikeTitle">Title: </label>
            <input type="text" name="hikeTitle" id="hikeTitle" />
            <br />
            <label htmlFor="date">Date: </label>
            <input type="text" name="date" id="date" />
            <label htmlFor="time"> Time: </label>
            <input type="text" name="time" id="time" />
            <br />
            <label htmlFor="location"> Location: </label>
            <input type="text" name="location" id="location" />
            <br />            
            <label htmlFor="comments">Comments: </label>
            <br/>
            <textarea
              type="textarea"
              name="comments"
              id="comments"
            />
            <br />
            <button type="submit" className="form-button">Submit Form</button>
          </form>
        </div>
        <div className="hike-section">
          <h2>Hike Search Results</h2>
          {allTrails.map((trail) => (
        <AllTrailsPost hikeInfo={trail} key={trail.id} />
      ))}
        </div>
      </div>
    </div>
  );
}
export default PostHike;
