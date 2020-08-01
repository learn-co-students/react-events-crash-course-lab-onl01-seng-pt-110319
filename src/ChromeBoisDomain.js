import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    let run = event.clientX;
    let rise = event.clientY;
    drawChromeBoiAtCoords(run, rise);
 
  }
  
  handleResizeEvent = (event) => {
    if (event.key === 'a') {
      resize('+')
    }
    else {
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onClick={toggleCycling}
        onKeyPress={this.handleResizeEvent}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
