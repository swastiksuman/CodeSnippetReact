import React from 'react';
import { Table } from 'react-bootstrap';

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
  
  export default ListOfSnippets;