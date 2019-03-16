import React, { Component } from "react";

class App extends Component {
  state = {
    inputValueOne: "type something",
    inputValueTwo: "type something again",
    numberTracker: 1,
    foodList: []
  };

  //two way binding for input - onChange event
  inputUpdate = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  //two way binding for button - onClick event
  buttonClickUpdate = e => {
    e.preventDefault();
    let currentNumber = Math.random();
    this.setState({ numberTracker: currentNumber });
  };

  //two way binding for loops

  foodList = [
    "coffee",
    "potatoes",
    "drinks",
    "spices",
    "bananas",
    "oranges",
    "oatmeal",
    "bread",
    "flowers"
  ];

  printMeALoop = () => {
    let buttons = [];
    let foodList = this.state.foodList;

    const addFoodItem = e => {
      e.preventDefault();
      foodList.push(e.target.value);
      this.setState({ foodList: foodList });
    };

    this.foodList.map(function(item, key) {
      buttons.push(
        <button
          className="waves-effect waves-light btn col s4"
          key={key}
          value={item}
          onClick={addFoodItem.bind(this)}
        >
          {item}
        </button>
      );
    });

    return buttons;
  };

  removeMeFromLoopPls = e => {
    let theGroceries = [];
    let foodList = this.state.foodList;

    const removeItem = e => {
      e.preventDefault();
      let index = foodList.indexOf(e.target.value);
      if (index > -1) foodList.splice(index, 1);
      this.setState({ foodList: foodList });
    };

    this.state.foodList.map(function(item, key) {
      theGroceries.push(
        <li key={key}>
          <span className="col s11"> {item} </span>
          <button
            value={item}
            className="col s1 btn"
            onClick={removeItem.bind(this)}
          >
            x
          </button>
        </li>
      );
    });

    return theGroceries;
  };

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col s3" />
          <div className="card col s6">
            <span class="card-title">Two Way Binding Input</span>
            <input
              type="text"
              id="inputValueOne"
              placeholder="this is input one"
              onChange={this.inputUpdate}
            />
            <input
              type="text"
              id="inputValueTwo"
              placeholder="this is input two"
              onChange={this.inputUpdate}
            />
            <p>
              <strong>First input:</strong> {this.state.inputValueOne} <br />{" "}
              <strong>Second input: </strong>
              {this.state.inputValueTwo}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s3" />
          <div className="card col s6">
            <span class="card-title">
              Two Way Binding{" "}
              <button
                className="waves-effect waves-light btn"
                onClick={this.buttonClickUpdate}
              >
                onClick
              </button>{" "}
              event
            </span>

            <p>Your random number is: {this.state.numberTracker}</p>
          </div>
        </div>

        <div className="row">
          <div className="col s3" />
          <div className="card col s6">
            <span class="card-title">Two Way Binding in Loops</span>

            <p>Remember to grab...</p>

            {this.printMeALoop()}

            <ul className="collection">{this.removeMeFromLoopPls()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
