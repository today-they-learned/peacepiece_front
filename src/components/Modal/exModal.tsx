import React from "react";
import styled from "styled-components";
import Portal from "./Portal";

interface Props {
  children: React.ReactNode;
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
}

const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const Modal = ({ onClose, visible, children }: Props) => {
  const closable = true;
  const maskClosable = true;

  const onMaskClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e: React.MouseEvent<HTMLElement>) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className="modal-wrapper"
        onClick={maskClosable ? onMaskClick : null}
        visible={visible}
      >
        <ModalInner className="modal-inner">
          {closable && <button onClick={close}>취소</button>}
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;

// onClose를 처리하자....집 도착하면......
