import React, { useRef } from "react";

// 이런 멍청한 컴포넌트 같으니라구
// Dumb Component, Presentational Component
function Form({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );

  function click() {
    const todo = inputRef.current.value;
    add(todo);
    inputRef.current.value = "";
  }
}

export default Form;
