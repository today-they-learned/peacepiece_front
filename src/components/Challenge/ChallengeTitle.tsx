import Tooltip from "components/Tooltip/Tooltip";
import { FlexBox, FlexTextBox } from "components/common";

interface Props {
  title: string;
  toolTipContent?: string;
  margin?: string;
}

const defaultProps = {
  toolTipContent: "",
  margin: "0.1rem 0 0 0",
};

const ChallengeTitle = (props: Props) => {
  const { title, toolTipContent, margin } = props;

  return (
    <FlexBox alignItems="center">
      <FlexTextBox fontSize="1.56rem" fontFamily="Pr-Bold" margin={margin}>
        {title}
      </FlexTextBox>
      {toolTipContent && <Tooltip text={toolTipContent} margin="0 0 0 1rem" />}
    </FlexBox>
  );
};
ChallengeTitle.defaultProps = defaultProps;

export default ChallengeTitle;
