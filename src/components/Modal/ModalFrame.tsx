import COLOR from "constants/color";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FlexBox, FlexButton, FlexTextBox } from "components/common";
import Portal from "./Portal";

interface AreaElement {
  children: React.ReactNode;
  modalMainColor?: string;
  width: string;
  height: string;
  title: string;
  btnTitle1: string;
  btnTitle2: string;
  background?: string;
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLElement>) => void;
  type?: string;
  subTitle?: boolean;
}

const defaultProps = {
  modalMainColor: COLOR.font.primary,
  background: COLOR.bg.default,
  type: "warning",
  subTitle: false,
};

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
  background-color: ${COLOR.bg.modalShadow};
  z-index: 999;
`;

const ModalFrame = (props: AreaElement) => {
  const {
    children,
    modalMainColor,
    width,
    height,
    title,
    btnTitle1,
    btnTitle2,
    background,
    visible,
    onClose,
    type,
    subTitle,
  } = props;

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

  const closable = true;
  const maskClosable = true;

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={visible}>
        <ModalWrapper
          visible={visible}
          className="modal-wrapper"
          onClick={maskClosable ? onMaskClick : null}
        >
          <FlexBox
            background={background}
            width={width}
            height={height}
            column
            padding="3rem"
            borderRadius="1.25rem"
            position="relative"
            top="50%"
            left="25%"
            transform="translateY(-50%)"
          >
            <FlexBox
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              margin="0 0 2rem 0"
            >
              <FlexBox>
                <FlexTextBox
                  color={modalMainColor}
                  fontSize="1.875rem"
                  fontFamily="Pr-Bold"
                >
                  {title}
                </FlexTextBox>
                {subTitle && (
                  <FlexTextBox
                    color={COLOR.white}
                    fontSize="1.875rem"
                    fontFamily="Pr-Bold"
                    margin="0 0 0 1rem"
                  >
                    챌린지 인증하기
                  </FlexTextBox>
                )}
              </FlexBox>
              {closable && (
                <button onClick={close}>
                  {closable && <AiOutlineClose color={COLOR.white} size="28" />}
                </button>
              )}
            </FlexBox>
            <FlexBox>{children}</FlexBox>
            <FlexBox
              position="relative"
              left={type === "warning" ? "23rem" : "27rem"}
              top={type === "warning" ? "7rem" : "1rem"}
            >
              <FlexButton
                fontSize="1.56rem"
                backgroundColor={COLOR.bg.default}
                onClick={onClose}
              >
                {btnTitle1}
              </FlexButton>
              <FlexButton
                margin="0 0 0 1rem"
                color={modalMainColor}
                fontSize="1.56rem"
                backgroundColor={COLOR.bg.primary}
              >
                {btnTitle2}
              </FlexButton>
            </FlexBox>
          </FlexBox>
        </ModalWrapper>
      </ModalOverlay>
    </Portal>
  );
};
ModalFrame.defaultProps = defaultProps;

export default ModalFrame;
