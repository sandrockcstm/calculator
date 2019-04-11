import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleInput(x) {
    if (this.state.display === 0 && x === "0") {
      this.setState({ display: "0" });
      return;
    } else if (x !== 0 && x !== "." && this.state.display === "0") {
      this.setState({ display: x });
    } else if (this.state.display.match(/\.{1,}/g) && x == ".") {
      return;
    } else {
      this.setState({ display: this.state.display + x });
      return;
    }
  }

  handleClear() {
    this.setState({ display: 0 });
    return;
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-6" />
        <div className="container col-md-3">
          <div className="row">
            <div id="display" className="container-fluid">
              {this.state.display}
            </div>
          </div>

          <div className="row">
            <button
              id="clear"
              className="col-9 btn btn-danger"
              onClick={() => this.handleClear()}
            >
              C
            </button>
            <button
              id="divide"
              className="col-3 btn btn-primary"
              onClick={() => this.handleInput("/")}
            >
              /
            </button>
          </div>
          <div className="row">
            <button
              id="seven"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("7")}
            >
              7
            </button>
            <button
              id="eight"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("8")}
            >
              8
            </button>
            <button
              id="nine"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("9")}
            >
              9
            </button>
            <button
              id="multiply"
              className="col-3 btn btn-primary"
              onClick={() => this.handleInput("x")}
            >
              x
            </button>
          </div>
          <div className="row">
            <button
              id="four"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("4")}
            >
              4
            </button>
            <button
              id="five"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("5")}
            >
              5
            </button>
            <button
              id="six"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("6")}
            >
              6
            </button>
            <button
              id="subtract"
              className="col-3 btn btn-primary"
              onClick={() => this.handleInput("-")}
            >
              -
            </button>
          </div>
          <div className="row">
            <button
              id="one"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("1")}
            >
              1
            </button>
            <button
              id="two"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("2")}
            >
              2
            </button>
            <button
              id="three"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("3")}
            >
              3
            </button>
            <button
              id="add"
              className="col-3 btn btn-primary"
              onClick={() => this.handleInput("+")}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              id="zero"
              className="col-6 btn btn-secondary"
              onClick={() => this.handleInput("0")}
            >
              0
            </button>
            <button
              id="decimal"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput(".")}
            >
              .
            </button>
            <button id="equals" className="col-3 btn btn-primary">
              =
            </button>
          </div>
        </div>
        <div className="col-md-6" />
      </React.Fragment>
    );
  }
}

export default App;
