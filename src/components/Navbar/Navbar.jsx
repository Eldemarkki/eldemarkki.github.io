import React from "react";

import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticked: false
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div id="navbar" className={this.state.sticked ? "sticky" : ""}>
        {this.props.children}
      </div>
    );
  }

  handleScroll() {
    // TODO: Change window.innerHeight to the navbar's actual top
    if (window.scrollY * 2 < window.innerHeight && this.state.sticked === true) {
      this.setState({ sticked: false });
    }
    else if (window.scrollY * 2 > window.innerHeight && this.state.sticked !== true) {
      this.setState({ sticked: true });
    }
  }

}

export default Navbar;