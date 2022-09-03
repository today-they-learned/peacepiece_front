import styled from "styled-components";
import COLOR from "constants/color";
import { AiOutlineClose } from "react-icons/ai";
import { FlexTextBox } from "components/common";
import FlexBox from "../common/FlexBox";
import FlexButton from "../common/FlexButton";
import ModalContainer from "./ModalContainer";

interface Props {
  children: React.ReactNode;
  modalMainColor?: string;
  width: string;
  height: string;
  title: string;
  btnTitle1: string;
  btnTitle2: string;
  subTitle?: string;
  background?: string;
}

const defaultProps = {
  modalMainColor: COLOR.font.primary,
  subTitle: "",
  background: COLOR.bg.default,
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalFrame = (props: Props) => {
  const {
    children,
    modalMainColor,
    width,
    height,
    title,
    btnTitle1,
    btnTitle2,
    subTitle,
    background,
  } = props;

  return (
    <ModalContainer>
      <Overlay>
        <FlexBox
          background={background}
          width={width}
          height={height}
          column
          padding="3rem"
          borderRadius="1.25rem"
          position="absolute"
          right="50%"
          bottom="50%"
          transform="translate(-50%, -50%)"
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
                  {subTitle}
                </FlexTextBox>
              )}
            </FlexBox>

            <AiOutlineClose color={COLOR.white} size="28" />
          </FlexBox>
          <FlexBox>{children}</FlexBox>
          <FlexBox float="right">
            <FlexButton fontSize="1.56rem" backgroundColor={COLOR.bg.default}>
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
      </Overlay>
    </ModalContainer>
  );
};
ModalFrame.defaultProps = defaultProps;

export default ModalFrame;
