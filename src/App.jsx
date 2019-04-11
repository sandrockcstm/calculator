import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-6" />
        <div className="container col-md-3">
          <div className="row">
            <div id="display" className="container-fluid">
              0
            </div>
          </div>

          <div className="row">
            <button id="clear" className="col-9 btn btn-danger">
              C
            </button>
            <button id="divide" className="col-3 btn btn-primary">
              /
            </button>
          </div>
          <div className="row">
            <button id="seven" className="col-3 btn btn-secondary">
              7
            </button>
            <button id="eight" className="col-3 btn btn-secondary">
              8
            </button>
            <button id="nine" className="col-3 btn btn-secondary">
              9
            </button>
            <button id="multiply" className="col-3 btn btn-primary">
              x
            </button>
          </div>
          <div className="row">
            <button id="four" className="col-3 btn btn-secondary">
              4
            </button>
            <button id="five" className="col-3 btn btn-secondary">
              5
            </button>
            <button id="six" className="col-3 btn btn-secondary">
              6
            </button>
            <button id="subtract" className="col-3 btn btn-primary">
              -
            </button>
          </div>
          <div className="row">
            <button id="one" className="col-3 btn btn-secondary">
              1
            </button>
            <button id="two" className="col-3 btn btn-secondary">
              2
            </button>
            <button id="three" className="col-3 btn btn-secondary">
              3
            </button>
            <button id="add" className="col-3 btn btn-primary">
              +
            </button>
          </div>
          <div className="row">
            <button id="zero" className="col-6 btn btn-secondary">
              0
            </button>
            <button id="decimal" className="col-3 btn btn-secondary">
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
