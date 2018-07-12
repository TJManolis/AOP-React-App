import React from "react";
import Calculator from "../components/Calculator.js";
import Notes from "../components/Notes.js";
import Email from "../components/Email.js";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }

  clickToggleComponents = event => {
    switch (event.target.id) {
      case "calculator":
        this.setState({ ...this.state, selection: 1 });
        break;
      case "notes":
        this.setState({ ...this.state, selection: 2 });
        break;
      case "email":
        this.setState({ ...this.state, selection: 3 });
        break;

      default:
        this.setState({ ...this.state, selection: 0 });
    }
  };

  render() {
    if (this.state.selection === 0) {
      return (
        <div className="footer">
          <div style={{ margin: 20 }}>
            <button
              id="calculator"
              className="footerButton calculator"
              onClick={this.clickToggleComponents}
            >
              Calculator
            </button>
            <button
              id="notes"
              className="footerButton notes"
              onClick={this.clickToggleComponents}
            >
              Notes
            </button>
            <button
              id="email"
              className="footerButton email"
              onClick={this.clickToggleComponents}
            >
              Email
            </button>
          </div>
        </div>
      );
    } else if (this.state.selection === 1) {
      return (
        <div>
          <Calculator />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 2) {
      return (
        <div>
          <Notes />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 3) {
      return (
        <div>
          <Email />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else {
      return <div>Shouldnt see this</div>;
    }
  }
}

export default Footer;
