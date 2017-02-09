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
               <Button bsStyle="danger" onClick={(id)=> props.deleteHandler(item._id)}>Delete</Button>
               <Button bsStyle="primary" onClick={(id)=> props.updateHandler(item._id)}>Update</Button>
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
