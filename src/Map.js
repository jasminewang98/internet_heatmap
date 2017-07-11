import React, { Component } from 'react';

class Map extends Component {
  render() {
    const basic = new Datamap({
        element: document.getElementById("basic")
    });
    return (
      <div>
        {basic}
      </div>
    );
  }
}

export default Map;
