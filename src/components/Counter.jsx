import React, { useEffect, useState } from "react";

const Counter = (props) => {
  const [changeTime, setChangetime] = useState(0);

  useEffect(() => {
    props.setCount(100);
    console.log("test01");
  }, []);
  useEffect(() => {
    setChangetime(changeTime + 1);
    console.log("test02");
  }, [props.count]);

  return (
    <>
      <h1>{props.title}</h1>
      <p>count: {props.count}</p>
      <button onClick={() => props.setCount(props.count + 1)}>+1</button>
      <p>countのpropが{changeTime}次変えられた</p>
      {changeTime < 5 ? null : (
        <h5 style={{ color: "red" }}>おしすぎるだろう,やめやめ</h5>
      )}
      {props.count >= 110 && <h5 style={{ color: "red" }}>count大きすぎる</h5>}
    </>
  );
};

export default Counter;
