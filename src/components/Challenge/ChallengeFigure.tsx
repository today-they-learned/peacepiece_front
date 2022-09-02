import styled from "styled-components";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { AiOutlineUser } from "react-icons/ai";

interface Props {
  person: number;
  point: number;
  background?: string;
}

const defaultProps = {
  background: COLOR.bg.default,
};

const Person = styled(AiOutlineUser)`
  width: 1.1rem;
  height: 1rem;
  margin: 0.2rem 0.2rem 0 0;
  color: ${COLOR.font.secondary};
`;

const ChallengeFigure = (props: Props) => {
  const { person, point, background } = props;
  return (
    <FlexBox margin="0 1.2rem 0 0" background={background}>
      <FlexBox margin="0 1rem 0 0" background={background}>
        <Person />
        <FlexTextBox
          fontSize="0.75rem"
          fontFamily="Pr-Medium"
          color={COLOR.font.secondary}
        >
          {person}명
        </FlexTextBox>
      </FlexBox>
      <FlexTextBox
        fontSize="0.875rem"
        fontFamily="Pr-Medium"
        color={COLOR.font.secondary}
      >
        PP {point}
      </FlexTextBox>
    </FlexBox>
  );
};
ChallengeFigure.defaultProps = defaultProps;

export default ChallengeFigure;
