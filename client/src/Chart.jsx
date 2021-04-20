import React, { useEffect, useState } from "react";
import { bubbleSort, merge, mergeSort, selectSort } from "../algos/algos.js";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      time: null,
    };

    this.newArray = this.newArray.bind(this);
    this.merge = this.merge.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
  }

  componentDidMount() {
    this.newArray();
  }

  merge(left, right) {
    let result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }

  mergeSort(array) {
    const half = Math.floor(array.length / 2);

    if (array.length < 2) return array;

    const left = array.splice(0, half);
    return this.merge(this.mergeSort(left), this.mergeSort(array));
  }

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
    return (
      <div className="array-container">
        {this.state.data.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
        <button
          onClick={() => {
            this.newArray();
            this.setState({
              time: null,
            });
          }}
        >
          Generate a new Array
        </button>
        <button
          onClick={() => {
            let time0 = new Date();
            const array = bubbleSort(this.state.data);
            let time1 = new Date();
            let diff = (time1 - time0) / 1000;
            this.setState({
              data: array,
            });
            this.setState({
              time: diff,
            });
          }}
        >
          Bubble Sort
        </button>
        <button onClick={() => this.mergeSort(this.state.data)}>
          Merge Sort
        </button>
        <button
          onClick={() => {
            let time0 = performance.now();
            const array = selectSort(this.state.data);
            let time1 = performance.now();
            let diff = (time1 - time0) / 1000;
            this.setState({
              data: array,
            });
            this.setState({
              time: diff,
            });
          }}
        >
          Selection Sort
        </button>
        <p>Time to Run Sort in seconds: {this.state.time} </p>
      </div>
    );
  }
}

export default Chart;
