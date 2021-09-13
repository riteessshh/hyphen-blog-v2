import React, { Component } from "react";

class Acomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
    };
  }
  render() {
    return (
      <div>
        Konichiwa! {this.props.name}
        {this.state.age}
      </div>
    );
  }
}

export default Acomponent;
