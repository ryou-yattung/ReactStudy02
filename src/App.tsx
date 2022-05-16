import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ThisFunc from "./components/ThisFunc";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} title="Counter App" />
      <ThisFunc />
    </div>
  );
}

export default App;
