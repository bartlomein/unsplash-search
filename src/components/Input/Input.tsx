import React from "react";

const Input = ({ onChange }) => {
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default Input;
