import Tooltip from "components/Tooltip/Tooltip";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { ReactNode } from "react";

interface Props {
  title: string;
  toolTipContent?: string | ReactNode;
  margin?: string;
  background?: string;
  color?: string;
}

const defaultProps = {
  toolTipContent: "",
  margin: "0.1rem 0 0 0",
  background: COLOR.bg.default,
  color: "white",
};

const ChallengeTitle = (props: Props) => {
  const { title, toolTipContent, margin, background, color } = props;

  return (
    <FlexBox alignItems="flex-start" background={background}>
      <FlexTextBox
        fontSize="1.56rem"
        lineHeight="2rem"
        fontFamily="Pr-Bold"
        mobileFontSize="1.4rem"
        margin={margin}
        color={color}
      >
        {title}
      </FlexTextBox>
      {toolTipContent && (
        <Tooltip text={toolTipContent} margin="4px 0 0 1rem" />
      )}
    </FlexBox>
  );
};
ChallengeTitle.defaultProps = defaultProps;

export default ChallengeTitle;
