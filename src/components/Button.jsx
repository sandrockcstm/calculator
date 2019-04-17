import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <button
        id={this.props.id}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}
