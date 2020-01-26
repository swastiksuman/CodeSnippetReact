import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import AddUpdateSnippet from './Snippets/SnippetAddUpdate';
import ListOfSnippets from './Snippets/SnippetListing'

function App(props) {
  const [data, setData] = useState([]);
  
  const getCourseList = () => {
    
  };

  
  useEffect(() => {  
    axios.get(
      '/getCourses',
    ).then((res) => {setData(res.data)});
  }, []);

  return (
    <div className="App">
      <ListOfSnippets listOfData={data}></ListOfSnippets>
      <AddUpdateSnippet></AddUpdateSnippet>
    </div>
  );
}

export default App;
