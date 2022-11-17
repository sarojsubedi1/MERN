import './App.css';

function App() {
  return (
    <div>
    <form>
    <h2>User Registration Form</h2>
    <div><label htmlFor="full-name">Full name:</label>
      <input type="text" id="full-name" placeholder="First Name" />
      <input type="text" id="full-name" placeholder="Last Name" /></div><br />
    <div><label htmlFor="address">Address:</label>
      <input type="text" id="address" /></div><br />
    <div>
      <label htmlFor="location">Location</label>
      <select id="location">
        <option value="kathmandu">Kathmandu</option>
        <option value="bhaktapur">Bhaktapur</option>
        <option value="lalitpur">Lalitpur</option>
        <option value="outside-valley">Outside Valley</option>
      </select>
    </div><br />
    <div>
      <label htmlFor="gender">Gender</label>
      <select id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">other</option>
      </select>
    </div><br />
    <div>
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" />
    </div><br />
    <div> 
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  </form>
</div>
  );
}

export default App;
