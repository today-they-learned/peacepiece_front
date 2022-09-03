import COLOR from "constants/color";
import { AiOutlineClose } from "react-icons/ai";
import { FlexTextBox } from "components/common";
import FlexBox from "../common/FlexBox";
import FlexButton from "../common/FlexButton";

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
    <FlexBox
      background={background}
      width={width}
      height={height}
      column
      padding="3rem"
      borderRadius="1.25rem"
      position="relative"
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
      <FlexBox position="absolute" right="3rem" bottom="2rem">
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
  );
};
ModalFrame.defaultProps = defaultProps;

export default ModalFrame;
