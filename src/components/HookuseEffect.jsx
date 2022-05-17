import React, { useEffect } from "react";

const HookuseEffect = () => {
  useEffect(() => {
    console.log("This is like componentDidMount");
    return () => {
      console.log("This is like componentWillUnmount");
    };
  });

  return <div>HookuseEffect</div>;
};

export default HookuseEffect;
