import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  }

  handleToggleCycling = (event) => toggleCycling();
  
  handleKeyCapture = (event) => {
    event.key === "a" && resize("+");
    event.key === "s" && resize("-");
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyPress={this.handleKeyCapture}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
