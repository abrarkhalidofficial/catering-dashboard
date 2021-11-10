import React from "react";

export default function InputBox({
  placeholder,
  type,
  required,
  autoFocus,
  variant,
}) {
  if (variant === "checkbox") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "0em .2em",
          width: "100%",
        }}
      >
        <input
          type="checkbox"
          name={"input__box" + placeholder}
          id={"input__box" + placeholder}
          className="input__box__checkbox"
          required={required}
        />
        <label htmlFor={"input__box" + placeholder}>{placeholder}</label>
      </div>
    );
  } else {
    return (
      <input
        type={type}
        className="input__box"
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    );
  }
}
