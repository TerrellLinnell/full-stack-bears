import React from 'react';

var Home = function (props) {
  return(
    <div>
      <h1> Welcome to the Bears app!</h1>
      <button onClick={ () => props.updateActiveComponent('viewAll') }>View All Bears</button> {/* ES6 way of doing this */}
      <button onClick={props.updateActiveComponent.bind(this, 'postNew') }>Post new bear</button> {/* ES5 way of doing this*/}
    </div>
  )
}

export default Home;
