//BearsApp (decides which component to render)
//-viewAllBearsData (gets bears from server and passes them down)
//-bearsList (renders bears into  list items)
//-postBear data(holds state for bears form, submits bears to server)
//bearPostForm (just a simple form)
//editBearData (gets the bear from server, holds form state, posts bear to server)
//bearEdutForm (just a simple form)

import React from 'react';
import './bearsApp.css';
import Home from './Home';
import ViewAllBears from './ViewAllBears';
import PostBearsData from './PostBearsData';
import UpdateBearData from './UpdateBearData';


var BearsApp = React.createClass({
  getInitialState: function () {
    return{activeComponent: 'Home',
           updatingBear: null};
  },
updateActiveComponent: function (whichIsActive) {
  this.setState({activeComponent: whichIsActive});
},
updateBear: function (bearId) {
  var data = this.state;
  data.updatingBear = bearId;
  this.setState(data);
},
renderProperComponent: function () {
  if (this.state.activeComponent === "Home") {
    return (<Home updateActiveComponent={this.updateActiveComponent}/>);
  } else if (this.state.activeComponent === "viewAll") {
    return (<ViewAllBears updateActiveComponent={this.updateActiveComponent}
              updateBear={this.updateBear} />);
  } else if (this.state.activeComponent === "postNew") {
    return (<PostBearsData updateActiveComponent={this.updateActiveComponent} />);
  } else if (this.state.activeComponent === ('updateBear')) {
    return (<UpdateBearData bearId={this.state.updatingBear}
              updateActiveComponent={this.updateActiveComponent} />);
  }
  else {
    return null;
  }
},
  render: function () {
    return (
      <div>
        {this.renderProperComponent() }
      </div>
    );
  },
});
export default BearsApp;
