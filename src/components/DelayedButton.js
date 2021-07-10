// Code DelayedButton Component Here
import React, { Component } from "react";

export default class DelayedButton extends Component {
  persistEvent = (e) => {
    e.persist()
    return e
  }
  render() {
    return(
      <button onClick={(e) => setTimeout(()=>this.props.onDelayedClick(this.persistEvent(e)),this.props.delay)}>Click</button>
    )
  }
}