import React from "react";

//Style CSS
import '../assets/styles/buttom.css';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
