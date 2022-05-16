import React from "react";

const ThisFunc = () => {
  function test() {
    console.log(this);
  }
  const obj = {};
  obj.test = test;
  console.log(obj);
  test();

  return <div>ThisFunc</div>;
};

export default ThisFunc;
