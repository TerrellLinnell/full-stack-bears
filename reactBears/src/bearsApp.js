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



var BearsApp = React.createClass({
  getInitialState: function () {
    return{activeComponent: 'Home'};
  },
updateActiveComponent: function (whichIsActive) {
  this.setState({activeComponent: whichIsActive});
},
renderProperComponent: function () {
  if (this.state.activeComponent === "Home") {
    return (<Home updateActiveComponent={this.updateActiveComponent}/>);
  } else if (this.state.activeComponent === "viewAll") {
    return (<ViewAllBears />);
  } else if (this.state.activeComponent === "postNew") {
    return (<PostBearsData />);
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
