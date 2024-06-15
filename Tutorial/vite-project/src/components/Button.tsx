import Alert from "./Alert";
import { useState } from "react";

interface ButtonProps {
  children: string;
  onClick: () => void;
  color?:
     "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
