import React from 'react';
import {Table, Button} from 'react-bootstrap';


function ActionBtn(props) {
  return (
    <Button bsStyle="danger" onClick={props.onClick}>{props.text}>Delete</Button>
  );
}


function BearsTable (props) {
  var bears = props.bears.map(function (item) {
    return <tr><td>{item.name}</td>
               <td>{item.species}</td>
               <td>{item.age}</td>
               <td>{item.weight}</td>
               <td>{item.location}</td>
               <td>{item.attitude}</td>
               <td><ActionBtn text='Delete' onClick={props.deleteHandler} /></td>
               <td><ActionBtn text='Update' onClick={props.updateHandler} /></td>
            </tr>
  });
  return(
    <div>
      <Table hover bordered>
        <thead>
          <tr>
            <th><strong>Name</strong></th>
            <th><strong>Species</strong></th>
            <th><strong>Age</strong></th>
            <th><strong>Weight</strong></th>
            <th><strong>Location</strong></th>
            <th><strong>Attitude</strong></th>
            <th><strong>Action</strong></th>
          </tr>
          </thead>
          <tbody>
          {bears}
          </tbody>
      </Table>
    </div>
  );
}

export default BearsTable;
