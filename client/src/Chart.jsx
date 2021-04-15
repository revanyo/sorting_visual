import React, { useEffect, useState } from "react";
import bubbleSort from "../algos/algos.js";

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
      result.push(temp);
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
        {/* <button onClick={() => newArray()}>Generate a new Array</button>
        <button onClick={() => bubbleSort(data)}>Bubble Sort</button> */}
      </div>
    );
  }
}

export default Chart;
