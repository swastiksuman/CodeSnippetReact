import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AddUpdateSnippet from './Snippets/SnippetAddUpdate';
import ListOfSnippets from './Snippets/SnippetListing'

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

export default App;
