import React from "react";
// import PropTypes from "prop-types";

const Counter = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <p>count: {props.count}</p>
      <button onClick={() => props.setCount(props.count + 1)}>+1</button>
    </>
  );
};

// Counter.propTypes = {
//   count: PropTypes.number,
//   setCount: PropTypes.func,
//   title: PropTypes.string,
// };

export default Counter;
