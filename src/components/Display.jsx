import React, { Component } from "react";

export default class Display extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className}>
        {this.props.display}
      </div>
    );
  }
}
