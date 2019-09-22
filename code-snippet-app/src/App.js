import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form } from 'react-bootstrap';


function App(props) {
  return (
    <div className="App">
      <ListOfSnippets listOfData={props.listOfData}></ListOfSnippets>
      <AddUpdateSnippet></AddUpdateSnippet>
    </div>
  );
}
 
function ListOfSnippets(props){
  return (
    <Table striped bordered hover>
      <tr>
    <th>ID</th>
    <th>Type</th>
    <th>Snippet</th>
  </tr>
  {
    props.listOfData.map((data)=> <tr>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
      </tr>
    )
  }
</Table>
  )
}

function AddUpdateSnippet(props){
  return (
    <Form>
      <Form.Group controlId="formCodeSnippet">
      <Form.Label>Code Snippet</Form.Label>
      <Form.Control type="text" placeholder="Code Snippet" />
    </Form.Group>
    <Form.Group controlId="formCodeType">
    <Form.Label>Select Code Type</Form.Label>
    <Form.Control as="select">
      <option>C</option>
      <option>C++</option>
      <option>Java</option>
    </Form.Control>
  </Form.Group>
    </Form>
  )
}
export default App;
