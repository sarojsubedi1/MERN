import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="Date of Birth" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Select>
        <option>Kathmandu</option>
        <option>Bhaktapur</option>
        <option>Lalitpur</option>
        <option>Other city</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Gender</Form.Label>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
            <Form.Check
            inline
            label="Other"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
      </Form.Group>
      <Button variant="danger" type="submit">
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default App;
