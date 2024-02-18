import React from "react";

function Input({ label, state, setState, type = "text" }) {
  return (
    <div className="form-floating">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
}

export default Input;
