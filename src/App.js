import React, {Component} from 'react';
import Shape from './shape';

class Selector extends Component {
  constructor(){
    super();
    this.state={
      selectedShape: "square"
    }
  }
  selectedShape = (shapeName) =>{
    this.setState({
      selectedShape: shapeName,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navabr">
          <div> Selected: </div>
          <span> {this.state.selectedShape}</span>
          </div>
          <div className="shape-list">
          <Shape shape="square" selectedShape={this.selectedShape}/>
          <Shape shape="triangle" selectedShape={this.selectedShape}/>
          <Shape shape="circle" selectedShape={this.selectedShape}/>
          </div>
      </div>
    )
  }
}

export default Selector;
