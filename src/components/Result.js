import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      throughputValue: props.throughputValue,
      flowtimeValue: props.flowtimeValue,
      wip: props.wip,
      toggle: props.toggle
    };
    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.throughputValue !== this.props.throughputValue) {
      this.setState({ throughputValue: nextProps.throughputValue }, () =>
        console.log(this.state.throughputValue)
      );
    }
  }

  render() {
    return (
      <div className="grayBox">
        <div className="grayLabel">Result</div>
        <div className="wipResult">{this.state.wip}</div>

        <div>
          WIP<br /> {this.state.wip}
        </div>
        <div>
          Throughput<br /> {this.state.throughputValue}
        </div>
        <div>
          Flowtime<br /> {this.state.flowtimeValue}
        </div>
      </div>
    );
  }
}

export default Result;
