import { ReactNode } from "react";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface ErrorTextProps {
  children: ReactNode;
  margin?: string;
}

const defaultProps = {
  margin: "0",
};

const Error = ({ children, margin }: ErrorTextProps) => {
  return (
    <FlexBox alignItems="center" background="transparent" margin={margin}>
      <AiOutlineExclamationCircle
        color={COLOR.font.danger}
        size="0.8rem"
        style={{ marginRight: "0.15rem" }}
      />
      <FlexTextBox color={COLOR.font.danger} fontSize="0.8rem">
        {children}
      </FlexTextBox>
    </FlexBox>
  );
};

Error.defaultProps = defaultProps;

export default Error;
