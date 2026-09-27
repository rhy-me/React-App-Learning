import { ReactNode } from "react";
import Button from "./Button";
import { useState } from "react";
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  const [alertVisibile, setAlertVisibility] = useState(true);
  return (
    <div className="alert alert-warning alert-dismissible">
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      {children}
    </div>
  );
};
export default Alert;
