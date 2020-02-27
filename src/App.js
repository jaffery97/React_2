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

              <Shape shape="square" selectShape={this.selectShape}/>
              <Shape shape="circle" selectShape={this.selectShape}/>
              <Shape shape="triangle" selectShape={this.selectShape}/>
              <Shape shape="star" selectShape={this.selectShape} />
              <Shape shape="oval" selectShape={this.selectShape}/>
          </div>
      </div>
    )
  }
}

export default Selector;
