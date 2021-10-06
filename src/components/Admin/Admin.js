import React,{useState} from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Admin(){
  
  const [tableData,setTableData] = useState([]);
  const [ID,setID] = useState('');
  
  function getUser(e){
    e.preventDefault();
    console.log(ID);

    const endpointURL = `https://6151d1934a5f22001701d46f.mockapi.io/api/capston/${ID}`;

    axios.get(endpointURL)
      .then((response)=>{
        console.log(response.data);
        setTableData(response.data);
      })
  }
  

  return(
  <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Get User Data</Accordion.Header>
    <Accordion.Body>
    <Form>
  <Form.Group className="mb-3" controlId="formUserID">
    <Form.Label>User ID:</Form.Label>
    <Form.Control type="text" placeholder="ID" onChange={e=>setID(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={getUser}>
    Submit
  </Button>
</Form>
<Container>
  <Row>
    <Col id="userGetDisplay">
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Car Type</th>
            </tr>
          </thead>
          <tbody>
              <tr>
              <td>{tableData.id}</td>
              <td>{tableData.fName}</td>
              <td>{tableData.lName}</td>
              <td>{tableData.vehicleType}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Col>
  </Row>
</Container>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Delete User</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Update User</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>);
}

export default Admin;
