import React from "react";

const ThisFunc = () => {
  function test() {
    console.log(this);
  }
  const obj = {};
  obj.test = test;
  obj.test();

  //   逆に
  const obj02 = {
    test02: function () {
      console.log(this);
    },
  };
  const test02 = obj02.test02;
  test02();

  function Myobject(value) {
    this.value = value;
    this.increment = function () {
      this.value++;
    };
  }
  const myobject = new Myobject(0);
  console.log(myobject.value);

  myobject.increment();
  console.log(myobject.value);

  return <div>ThisFunc</div>;
};

export default ThisFunc;
