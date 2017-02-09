import React from 'react';

var Home = function (props) {
  return(
    <div>
      <h1> Welcome to the Bears app!</h1>
      <button onClick={ () => props.updateActiveComponent('viewAll') }>View All Bears</button>
      <button onClick={props.updateActiveComponent.bind(this, 'postNew') }>Post new bear</button>
    </div>
  )
}

export default Home;
