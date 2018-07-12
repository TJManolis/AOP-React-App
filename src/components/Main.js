import React from "react";
import Handbook from "./Handbook.js";
import AcronymGlossary from "./AcronymGlossary.js";
import Slides from "./Slides.js";
import Guidance from "./Guidance.js";
import WallWalks from "./WallWalks.js";
import "../styles.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 0
    };
  }

  clickToggleComponents = event => {
    switch (event.target.id) {
      case "handbook":
        this.setState({ ...this.state, selection: 1 });
        break;
      case "slides":
        this.setState({ ...this.state, selection: 2 });
        break;
      case "acronymGlossary":
        this.setState({ ...this.state, selection: 3 });
        break;
      case "guidance":
        this.setState({ ...this.state, selection: 4 });
        break;
      case "wallWalks":
        this.setState({ ...this.state, selection: 5 });
        break;

      default:
        this.setState({ ...this.state, selection: 0 });
    }
  };

  render() {
    if (this.state.selection === 0) {
      return (
        <div className="App">
          <button
            id="handbook"
            className="button handbook"
            onClick={this.clickToggleComponents}
          >
            Handbook
          </button>
          <button
            id="slides"
            className="button slides"
            onClick={this.clickToggleComponents}
          >
            Slides
          </button>
          <br />
          <button
            id="acronymGlossary"
            className="button acronymGlossary"
            onClick={this.clickToggleComponents}
          >
            Acronyms & Glossary
          </button>
          <br />
          <button
            id="guidance"
            className="button guidance"
            onClick={this.clickToggleComponents}
          >
            Guidance
          </button>
          <button
            id="wallWalks"
            className="button wallWalks"
            onClick={this.clickToggleComponents}
          >
            Wall Walks
          </button>
        </div>
      );
    } else if (this.state.selection === 1) {
      return (
        <div className="App">
          <Handbook />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 2) {
      return (
        <div className="App">
          <Slides />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 3) {
      return (
        <div className="App">
          <AcronymGlossary />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 4) {
      return (
        <div className="App">
          <Guidance />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else if (this.state.selection === 5) {
      return (
        <div className="App">
          <WallWalks />
          <button onClick={this.clickToggleComponents}>Back</button>
        </div>
      );
    } else {
      return <div>Shouldnt see this</div>;
    }
  }
}

export default Main;
