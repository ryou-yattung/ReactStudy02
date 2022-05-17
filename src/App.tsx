import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ThisFunc from "./components/ThisFunc";
import HookuseEffect from "./components/HookuseEffect";
import Form from "./components/FormDt";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} title="Counter App" />
      {/* <ThisFunc /> */}
      {/* <HookuseEffect /> */}
      <Form />
    </div>
  );
}

export default App;
