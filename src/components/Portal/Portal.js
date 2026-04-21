import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const node = document.getElementById("root-portal");
  if (!node) {
    return null;
  }
  return createPortal(children, node);
};
