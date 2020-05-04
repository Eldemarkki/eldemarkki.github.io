import React from "react";

import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticked: false
    }
  }

  render() {
    return (
      <div id="navbar">
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;