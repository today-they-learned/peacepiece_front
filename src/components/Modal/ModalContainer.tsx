import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  return createPortal(children, document.getElementById("modal"));
};
export default ModalContainer;
