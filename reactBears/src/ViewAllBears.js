import React from 'react';
import BearsTable from './BearsTable';
import $ from 'jquery';
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
  render: function () {
    return(
      <div>
        <h1>List of the Bears</h1>
        {this.state.bears ? <BearsTable bears={this.state.bears} /> : null}
      </div>
    );
  }
});

export default ViewAllBears;
