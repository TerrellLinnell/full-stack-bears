import React from 'react';
import './bearsApp.css';
import BearsTable from './bearsTable';
import BearsPostForm from './bearsPostForm';

var BearsApp = React.createClass({
  getInitialState: function () {
    var bears =[{name:"Yogi", species: "Black", age: 20, weight: 400, location: 'bozeman', attitude: 'average'}];
    return{bears: bears, showUpdate: false};
  },
  getBears: function () {
    //Ajax GET to API to get list of bears.
  },
  addABear: function () {
    //Ajax POST to add a Bear
  },
  updateBear: function () {
    //PUT to API to update a bear.
  },
  deleteABear: function () {
    //Delete to API to delete a bear.
  },
  deleteHandler: function (){
    console.log("Clicked the Delete button");
  },
  updateHandler: function (){
    console.log("Clicked the Update button");
  },

  render: function () {
    return (
      <div>
        <BearsTable  bears={this.state.bears} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler}/>
        <BearsPostForm />
        </div>
    );
  }
});

export default BearsApp;
