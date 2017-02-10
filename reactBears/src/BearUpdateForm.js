import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

function UpdateBearForm (props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Name" value={props.bearName}
          onChange={ (event) => props.updateBearName(event.target.value)}/>

          <ControlLabel>Age</ControlLabel>
          <FormControl type="text" placeholder="Age" value={props.bearAge}
          onChange={ (event) => props.updateBearAge(event.target.value)}/>

          <ControlLabel>Weight</ControlLabel>
          <FormControl type="text" placeholder="Weight" value={props.bearWeight}
          onChange={ (event) => props.updateBearWeight(event.target.value)}/>

          <ControlLabel>Species</ControlLabel>
          <FormControl type="text" placeholder="Species" value={props.bearSpecies}
          onChange={ (event) => props.updateBearSpecies(event.target.value)}/>

          <ControlLabel>Location</ControlLabel>
          <FormControl type="text" placeholder="Location" value={props.bearLocation}
          onChange={ (event) => props.updateBearLocation(event.target.value)}/>

          <ControlLabel>Attitude</ControlLabel>
          <FormControl type="text" placeholder="Attitude" value={props.bearAttitude}
          onChange={ (event) => props.updateBearAttitude(event.target.value)}/>

        </FormGroup>
      </Form>
      <Button bsStyle="success" onClick={() => props.onSubmit()}>Update the Bear </Button>
    </div>
  );
}

export default UpdateBearForm;
