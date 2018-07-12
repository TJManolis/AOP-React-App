import React from "react";
import Result from "./Result.js";

import "../styles.css";

class Wip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throughputValue: "",
      flowtimeValue: "",
      toggle: true,
      wip: 0
    };
  }

  updateInputValue(event) {
    if (event.target.id === "throughput")
      this.setState({
        throughputValue: event.target.value
      });
    else
      this.setState({
        flowtimeValue: event.target.value
      });
  }

  clearInput = event => {
    this.setState({
      throughputValue: "",
      flowtimeValue: ""
    });
  };

  calculate = event => {
    this.setState({
      toggle: !this.state.toggle,
      wip: this.state.throughputValue * this.state.flowtimeValue
    });
  };

  toggleUI = event => {
    this.setState({ 
      toggle: !this.state.toggle,
      throughputValue: '',
      flowtimeValue: '',
      wip: ''
      });
  };

  render() {
    if (this.state.toggle === true) {
      return (
        <div className="grayBox">
          <div className="grayLabel">Calculating For WIP</div>
          <div>
            Throughput<br />
            <input
              value={this.state.throughputValue}
              onChange={event => this.updateInputValue(event)}
              id="throughput"
              type="answer"
            />
          </div>
          <div>
            Flowtime<br />
            <input
              value={this.state.flowtimeValue}
              onChange={event => this.updateInputValue(event)}
              id="flowtime"
              type="answer"
            />
          </div>

          <button onClick={this.calculate}>Calculate</button>
          <button onClick={this.clearInput}>Clear</button>
          <button>Reset</button>
        </div>
      );
    } else {
      return (
        <div>
          <Result {...this.state} />
          <button onClick={this.toggleUI}>Back to WIP Calculator</button>
        </div>
      );
    }
  }
}

export default Wip;
