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
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    subTitle,
    handleSubmit,
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
            tabletWidth="80%"
            mobileWidth="80%"
            height={height}
            column
            padding="2rem"
            center
            borderRadius="1.25rem"
            margin="5vh auto"
          >
            <FlexBox
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              margin="0 0 1.5rem 0"
            >
              <FlexBox alignItems="baseline">
                <FlexTextBox
                  color={modalMainColor}
                  fontSize="1.7rem"
                  mobileFontSize="1.1rem"
                  fontFamily="Pr-Bold"
                >
                  {title}
                </FlexTextBox>
                {subTitle && (
                  <FlexTextBox
                    color={COLOR.white}
                    fontSize="1.5rem"
                    mobileFontSize="1rem"
                    fontFamily="Pr-Bold"
                    margin="0 0 0 1rem"
                    mobileDisplay="none"
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
            <FlexBox width="100%" mobileWidth="100%">
              {children}
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-end">
              <FlexButton
                fontSize="1.4rem"
                mobileFontSize="1.2rem"
                backgroundColor={COLOR.bg.default}
                onClick={onClose}
              >
                {btnTitle1}
              </FlexButton>
              <FlexButton
                margin="0 0 0 1rem"
                color={modalMainColor}
                fontSize="1.4rem"
                mobileFontSize="1.2rem"
                backgroundColor={COLOR.bg.primary}
                onClick={handleSubmit}
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
