import React, { useEffect, useState } from "react";
import { bubbleSort, merge, mergeSort, selectSort } from "../algos/algos.js";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.newArray = this.newArray.bind(this);
  }
  componentDidMount() {
    this.newArray();
  }

  componentDidUpdate() {}

  newArray() {
    let result = [];
    while (result.length < 310) {
      let temp = Math.floor(Math.random() * 310);
      if (!result.includes(temp)) {
        result.push(temp);
      }
    }
    this.setState({
      data: result,
    });
  }

  render() {
    console.log(this.state.data, "data");
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
        <button
          onClick={() => {
            const array = bubbleSort(this.state.data);
            this.setState({
              data: array,
            });
          }}
        >
          Bubble Sort
        </button>
        <button onClick={() => mergeSort(this.state.data)}>Merge Sort</button>
        <button
          onClick={() => {
            const array = selectSort(this.state.data);
            this.setState({
              data: array,
            });
          }}
        >
          Selection Sort
        </button>
      </div>
    );
  }
}

export default Chart;
