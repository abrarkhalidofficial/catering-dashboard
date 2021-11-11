import React from "react";

export default function InputBox({
  placeholder,
  type,
  required,
  autoFocus,
  variant,
  svg,
  style,
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
  } else if (variant === "search") {
    return (
      <div className="input__box__search" style={style}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type={type}
          className="input__box__search__field"
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
        />
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
