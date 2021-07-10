// Code CoordinatesButton Component Here
import React, { Component } from "react";
export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    const coordinates = [event.clientX,event.clientY]
    return coordinates
  }
  render() {
    return (
      <button onClick={(e)=>this.props.onReceiveCoordinates(this.handleClick(e))}>Click</button>
    )
  }
}