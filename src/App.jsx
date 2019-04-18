import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReactFCCtest from "react-fcctest";
import Button from "./components/Button.jsx";
import FormulaBox from "./components/FormulaBox.jsx";
import Display from "./components/Display.jsx";

const operators = /[+\-x*/]/g;
const letters = /[a-z]/i;
const letterX = /x/gi;
const incomplete = /[+\-/*x]$/;

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

  //Handles in put from operators
  handleOperator(e) {
    let newValue = this.state.display;
    if (incomplete.test(this.state.display)) {
      console.log("Replacing operator with new one");
      newValue = newValue.replace(operators, e);
      this.setState({ display: newValue });
    } else {
      console.log("handleOperator is concatenating");
      this.setState({ display: newValue + e });
      return;
    }
  }

  //Handles input from numbers
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
    let displayValue = this.state.display;
    console.log(
      "display is " + displayValue + " with a type of " + typeof displayValue
    );
    if (operators.test(displayValue)) {
      console.log(
        "Calling handleFormula().  Display is " +
          displayValue +
          " and x is " +
          x
      );
      this.handleFormula(displayValue, x);
    }
    //Doesn't allow for multiple starting 0s
    else if (displayValue === "0" && x === "0") {
      console.log("Multiple starting 0s not allowed");
      this.setState({ display: "0" });
      return;
    }
    //Removes the default 0 if preceding conditions aren't met
    else if (x !== "0" && x !== "." && displayValue === "0") {
      console.log("Removing default 0");
      this.setState({ display: x });
    }
    //Doesn't allow for consecutive decimals
    else if (displayValue.match(/\.{1,}/g) && x === ".") {
      console.log("Multiple decimals not allowed");
      return;
    }
    //Otherwise concat x to the string
    else {
      console.log(
        "handleInput is concatenating.  Display is " +
          displayValue +
          " and x is " +
          x
      );
      this.setState({ display: displayValue + x });
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
  handleFormula(y, x) {
    console.log("handleFormula() called");
    if (letters.test(this.state.formula)) {
      console.log("handleFormula() cleared non-numbers");
      this.setState({ formula: y.replace(letterX, "*"), display: x });
    } else if (this.state.formula === "0") {
      console.log("handleFormula() cleared single 0");
      this.setState({ formula: y.replace(letterX, "*"), display: x });
    } else {
      console.log("handleFormula() is Concatenating");
      this.setState({
        formula: this.state.formula + y.replace(letterX, "*"),
        display: x
      });
    }
    return;
  }

  evalForm() {
    console.log("evalForm() called");
    if (this.state.formula === "0" || this.state.formula === "Push a button") {
      console.log("Incomplete formula, resetting");
      this.setState({ formula: "0", display: "0" });
      return;
    } else {
      //console.log(incomplete.test(this.state.display));
      if (incomplete.test(this.state.display)) {
        console.log("You must finish the expression to evaluate it");
        this.setState({ formula: "0", display: "0" });
        return;
      }
      let value = eval(
        this.state.formula.toString() + this.state.display.toString()
      ).toString();
      console.log("Value = " + value);
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
            <FormulaBox
              id="formula"
              className="container-fluid"
              formula={this.state.formula}
            />
          </div>
          <div className="row">
            <Display
              id="display"
              className="container-fluid"
              display={this.state.display}
            />
          </div>

          <div className="row">
            <Button
              id="clear"
              className="col-9 btn btn-danger"
              onClick={this.handleClear}
              text="C"
            />
            <Button
              id="divide"
              className="col-3 btn btn-primary"
              onClick={() => this.handleOperator("/")}
              text="/"
            />
          </div>
          <div className="row">
            <Button
              id="seven"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("7")}
              text="7"
            />
            <Button
              id="eight"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("8")}
              text="8"
            />
            <Button
              id="nine"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("9")}
              text="9"
            />
            <Button
              id="multiply"
              className="col-3 btn btn-primary"
              onClick={() => this.handleOperator("x")}
              text="x"
            />
          </div>
          <div className="row">
            <Button
              id="four"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("4")}
              text="4"
            />
            <Button
              id="five"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("5")}
              text="5"
            />
            <Button
              id="six"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("6")}
              text="6"
            />
            <Button
              id="subtract"
              className="col-3 btn btn-primary"
              onClick={() => this.handleOperator("-")}
              text="-"
            />
          </div>
          <div className="row">
            <Button
              id="one"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("1")}
              text="1"
            />
            <Button
              id="two"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("2")}
              text="2"
            />
            <Button
              id="three"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput("3")}
              text="3"
            />
            <Button
              id="add"
              className="col-3 btn btn-primary"
              onClick={() => this.handleOperator("+")}
              text="+"
            />
          </div>
          <div className="row">
            <Button
              id="zero"
              className="col-6 btn btn-secondary"
              onClick={() => this.handleInput("0")}
              text="0"
            />
            <Button
              id="decimal"
              className="col-3 btn btn-secondary"
              onClick={() => this.handleInput(".")}
              text="."
            />
            <Button
              id="equals"
              className="col-3 btn btn-primary"
              onClick={() => this.evalForm()}
              text="="
            />
          </div>
        </div>
        <div className="col-md-6" />
      </React.Fragment>
    );
  }
}

export default App;
