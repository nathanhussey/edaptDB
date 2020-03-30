import React from "react";
import Astronaut from "../../images/spaceman.png";
import "./ErrorBoundary.scss";
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error">
          <img src={Astronaut} alt="astronaut" />
          <h2 className="item-text">This Page is Lost in Space</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
