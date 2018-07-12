import React from 'react';
import Wip from '../components/Wip.js';
import Throughput from '../components/Throughput.js';
import Flowtime from '../components/Flowtime.js';

import '../styles.css';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selection: 0
    }
  }

  calculateWizard = event => {
    switch (event.target.id) {
      case "wip":
        this.setState({ ...this.state, selection: 1 });
        break;
      case "throughput":
        this.setState({ ...this.state, selection: 2 });
        break;
      case "flowtime":
        this.setState({ ...this.state, selection: 3 });
        break;

      default:
        this.setState({ ...this.state, selection: 0 });
    }
    console.log(this.state.selection);
  }

  render(){

    if(this.state.selection === 0){
      return(
        <div className="grayBox">
          <div className="grayLabel">Choose value to Calculate:</div>
            <div className="blueLabel" id="wip" onClick={this.calculateWizard}>WIP</div>
            <div className="greenLabel" id="throughput" onClick={this.calculateWizard}>THROUGHPUT</div>
            <div className="lightBlueLabel" id="flowtime" onClick={this.calculateWizard}>FLOWTIME</div>
        </div>
      );
    } else if (this.state.selection === 1){
      return (
        <div>
          <Wip />
          <button onClick={this.calculateWizard}>Back to value selection</button>
        </div>
      );
    } else if (this.state.selection === 2) {
      return (
        <div>
          <Throughput />
          <button onClick={this.calculateWizard}>Back to value selection</button>
        </div>
      );
    } else if (this.state.selection === 3) {
      return (
        <div>
          <Flowtime />
          <button onClick={this.calculateWizard}>Back to value selection</button>
        </div>
      );
    }

  }
}

export default Calculator;