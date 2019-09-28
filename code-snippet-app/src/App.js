import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form, Button } from 'react-bootstrap';
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
  const [snippet, setSnippet] = useState('');
  const addSnippet = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  const createUpdateSnippet = (e) => {
    e.preventDefault();
    
    let res = axios.post('/submitSnippet', {
      
      type: 'C',
      snippet: snippet
    });
    console.log(res.data);
  }
  return (
    <form>
      <input value={snippet} onChange={(e)=>{console.log(e);setSnippet(e.target.value);}}></input>
      <select>
        <option>C</option>
        <option>C++</option>
        <option>Java</option>
      </select>
      <button onClick={(e)=>createUpdateSnippet(e)}>Submit</button>
    </form>
  )
}
export default App;
