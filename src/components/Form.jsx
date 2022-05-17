import { useState } from "react";
import FormDt from "./FormDt";

const Form = () => {
  const [formDone, setFormDome] = useState(false);

  return (
    <>
      <FormDt setFormDome={setFormDome} />
      {formDone ? <p>form完成</p> : <p>form書け</p>}
    </>
  );
};

export default Form;
