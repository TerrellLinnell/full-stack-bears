import React from 'react';
import BearsTable from './BearsTable';
import $ from 'jquery';
import {Button} from 'react-bootstrap';
var ViewAllBears = React.createClass({
  getInitialState: function () {
    return(
      {bears: null}
    );
  },
  componentWillMount: function () {
    this.getBearsFromServer();
  },
  getBearsFromServer: function () {
    var that = this;
    console.log('running get bears');
    $.ajax({
      url: '/api/bears',
      method: 'GET',
    }).done(function (data) {
      console.log('Got Bears');
      that.setState({bears: data});
    });
  },
  deleteABear: function(id) {
    $.ajax({
      url: '/api/bears/'+id,
      method: 'DELETE',
    }).done(function () {
      console.log('Deleted bear with id: ' + id);
    })
    var newData = this.state.bears.filter(function (item) {
      return item._id !== id;
    })
    this.setState({bears: newData});
  },
  updateABear: function (id) {
    this.props.updateBear(id);
    this.props.updateActiveComponent('updateBear');
    console.log("updating bear with id: " + id);
  },
  render: function () {
    return(
      <div>
        <h1>List of the Bears</h1>
        {this.state.bears ? <BearsTable bears={this.state.bears} deleteHandler={this.deleteABear} updateHandler={this.updateABear}/> : null}
        <Button bsStyle="primary" onClick={() => this.props.updateActiveComponent("Home")} > Home </Button>
      </div>
    );
  }
});

export default ViewAllBears;
