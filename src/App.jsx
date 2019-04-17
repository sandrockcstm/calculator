import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactFCCtest from "react-fcctest";
import Button from "./components/Button.jsx";

const operators = /[+\-x*/]/g;
const letters = /[a-z]/i;
const letterX = /x/gi;
const incomplete = /$[+\-/*x]/;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      formula: "Push a button"
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleFormula = this.handleFormula.bind(this);
    this.evalForm = this.evalForm.bind(this);
  }

  //Logic for display
  handleInput(x) {
    // console.log(
    //   "Result of test of display for operators is " +
    //     operators.test(this.state.display) +
    //     ". Display is " +
    //     this.state.display
    // );
    // console.log(
    //   "Result of test of x for operators is " + operators.test(x) + ". x = " + x
    // );

    //Checks if part of the formula is complete and the display needs to be reset
    if (
      operators.test(this.state.display) &&
      operators.test(/[0-9]\./) &&
      operators.test(x)
    ) {
      console.log("Calling handleFormula()");
      this.handleFormula(this.state.display);
      this.setState({ display: x });
    }
    //Doesn't allow for multiple starting 0s
    else if (this.state.display === "0" && x === "0") {
      console.log("Multiple starting 0s not allowed");
      this.setState({ display: "0" });
      return;
    }
    //Changes consecutive operators to only the newest
    else if (operators.test(this.state.display) && operators.test(x)) {
      console.log("Only one operator allowed");
      this.setState({ display: this.state.display.replace(operators, x) });
    }
    //Allows for operators to follow a zero
    else if (operators.test(x) && this.state.display.match()) {
      console.log("Adding operator after 0");
      this.setState({ display: this.state.display + x });
    }
    //Removes the default 0 if preceding conditions aren't met
    else if (x !== "0" && x !== "." && this.state.display === "0") {
      console.log("Removing default 0");
      this.setState({ display: x });
    }
    //Doesn't allow for consecutive decimals
    else if (this.state.display.match(/\.{1,}/g) && x === ".") {
      console.log("Multiple decimals not allowed");
      return;
    }
    //Otherwise concat x to the string
    else {
      console.log("handleInput is concatenating");
      this.setState({ display: this.state.display + x });
      return;
    }
  }

  //Clears the display and formula fields
  handleClear() {
    console.log("handleClear called");
    this.setState({ display: "0", formula: "0" });
    return;
  }

  //Moves the numbers and operators from the display to the formula box
  handleFormula(y) {
    console.log("handleFormula() called");
    if (letters.test(this.state.formula)) {
      console.log("Non-numbers cleared");
      this.setState({ formula: y.replace(letterX, "*") }); //Converts x to a *
    } else if (this.state.formula === "0") {
      console.log("Single 0 cleared");
      this.setState({ formula: y.replace(letterX, "*") });
      return;
    } else {
      console.log("handleFormula is Concatenating");
      this.setState({
        formula: this.state.formula + y.replace(letterX, "*")
      });
    }
    return;
  }

  evalForm() {
    if (this.state.formula === "0" || this.state.formula === "Push a button") {
      this.setState({ formula: "0", display: "0" });
      return;
    } else {
      console.log(incomplete.test(this.state.display));
      if (incomplete.test(this.state.display)) {
        console.log("You must finish the expression to evaluate it");
        this.setState({ formula: "0", display: "0" });
        return;
      }
      let value = eval(this.state.formula + this.state.display).toString();
      //console.log(value);
      this.setState({ display: value, formula: "0" });
      return;
    }
  }

  //The calculator
  render() {
    return (
      <React.Fragment>
        <ReactFCCtest />
        <div className="col-md-6" />
        <div className="container col-md-3">
          <div className="row">
            <div id="formula" className="container-fluid">
              {this.state.formula}
            </div>
          </div>
          <div className="row">
            <div id="display" className="container-fluid">
              {this.state.display}
            </div>
          </div>

          <div className="row">
            <Button
              id="clear"
              className="col-9 btn btn-danger"
              onClick={this.handleClear}
              text="C"
            />
            {/* <button
              id="clear"
              className="col-9 btn btn-danger"
              onClick={() => this.handleClear()}
            >
              C
            </button> */}
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
            <button
              id="equals"
              className="col-3 btn btn-primary"
              onClick={() => this.evalForm()}
            >
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
