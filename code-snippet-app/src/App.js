import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form } from 'react-bootstrap';
import axios from 'axios';

function App(props) {
  const [data, setData] = useState([]);
  
  const getData = async e => {
    const resp = await axios.get('/getCourses');
    console.log(resp);
    setData(resp.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/getCourses',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <ListOfSnippets listOfData={data}></ListOfSnippets>
      <AddUpdateSnippet></AddUpdateSnippet>
      <button onClick={(e)=>{getData();}}>Click</button>
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
      <td>{data.id}</td>
      <td>{data.type}</td>
      <td>{data.snippet}</td>
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
