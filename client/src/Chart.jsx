import React, { useEffect, useState } from "react";
import bubbleSort from "../algos/algos.js";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.newArray = this.newArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
  }
  componentDidMount() {
    this.newArray();
  }

  componentDidUpdate() {}

  newArray() {
    let result = [];
    while (result.length < 310) {
      let temp = Math.floor(Math.random() * 310);
      result.push(temp);
    }
    this.setState({
      data: result,
    });
  }

  bubbleSort(array) {
    const inner = (array) => {
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          count++;
          let tempOne = array[i];
          let tempTwo = array[i + 1];
          array[i] = tempTwo;
          array[i + 1] = tempOne;
        }
      }
      if (count > 0) {
        inner(array);
      }
    };
    inner(array);
    this.setState({
      data: array,
    });
  }

  render() {
    return (
      <div className="array-container">
        {this.state.data.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button onClick={() => this.newArray()}>Generate a new Array</button>
        <button onClick={() => this.bubbleSort(this.state.data)}>
          Bubble Sort
        </button>
      </div>
    );
  }
}

export default Chart;
