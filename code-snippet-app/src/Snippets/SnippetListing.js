import React from 'react';
import { Table } from 'react-bootstrap';

function ListOfSnippets(props){
    return (
      <Table striped bordered hover>
        <thead>
        <tr>
      <th>ID</th>
      <th>Type</th>
      <th>Snippet</th>
    </tr>
    </thead>
    <tbody>
    {
      props.listOfData.map((data)=> <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.type}</td>
        <td>{data.snippet}</td>
        </tr>
      )
    }
    </tbody>
  </Table>
    )
  }
  
  export default ListOfSnippets;