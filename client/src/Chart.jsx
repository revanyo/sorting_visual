import React, { useEffect, useState } from "react";
import bubbleSort from "../algos/algos.js";

function Chart(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let array = arrayGenerator();
    setData(array);
  }, []);

  const arrayGenerator = () => {
    let result = [];
    while (result.length < 310) {
      let temp = Math.floor(Math.random() * 310);
      result.push(temp);
    }
    return result;
  };

  const bubbleSort = (array) => {
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
    useEffect(array);
  };

  return (
    <div className="array-container">
      {data.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button onClick={() => newArray()}>Generate a new Array</button>
      <button onClick={() => bubbleSort(data)}>Bubble Sort</button>
    </div>
  );
}

export default Chart;
