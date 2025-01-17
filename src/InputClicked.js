import React, { useState } from "react";

export default function InputClicked({ placeholder, onChange, name }) {
  const [isInputClicked, setIsInputClicked] = useState(false);

  return (
    <input
      onFocus={() => setIsInputClicked(true)}
      onBlur={() => setIsInputClicked(false)}
      placeholder={isInputClicked ? "" : placeholder}
      onChange={onChange}
      name={name}
    />
  );
}
