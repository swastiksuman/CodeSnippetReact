import React, { useState } from 'react';
import axios from 'axios';

function AddUpdateSnippet(props){
    const [snippet, setSnippet] = useState('');
    const [type, setType] = useState('C');
    const addSnippet = (event) => {
      event.preventDefault();
      console.log(event.target);
    }
  
    const createUpdateSnippet = (e) => {
      e.preventDefault();
      
      let res = axios.post('/submitSnippet', {
        
        type: type,
        snippet: snippet
      });
      return res;
    }
    return (
      <form>
        <input value={snippet} onChange={(e)=>{console.log(e);setSnippet(e.target.value);}}></input>
        <select value={type} onChange={e=>{setType(e.target.value)}}>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
        </select>
        <button onClick={(e)=>{e.preventDefault(); var res = createUpdateSnippet(e);}}>Submit</button>
      </form>
    )
  }

  export default AddUpdateSnippet;