import React from 'react';
import {Table, Button} from 'react-bootstrap';




function BearsTable (props) {
  var bears = props.bears.map(function (item) {
    return( <tr><td>{item.name}</td>
               <td>{item.species}</td>
               <td>{item.age}</td>
               <td>{item.weight}</td>
               <td>{item.location}</td>
               <td>{item.attitude}</td>
               <Button bsStyle="danger">Delete</Button>
               <Button bsStyle="primary">Update</Button>
            </tr>
          );
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
            <th><strong>Delete</strong></th>
            <th><strong>Update</strong></th>
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
