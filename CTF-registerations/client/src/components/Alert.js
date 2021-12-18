import React from "react";

function Alert({ message, color,text,display}) {
  return (
    <div>
      <div
        className={`alert position-absolute start-50 translate-middle d-${display}`}
        role="alert"
        style={{ width: "fit-content", zIndex: "5000", top: "8vh",fontFamily:"cairo, sans-serif", backgroundColor:`${color}`,color:`${text}` }}
      >
        {message}{" "}
      </div>{" "}
    </div>
  );
}

export default Alert;
