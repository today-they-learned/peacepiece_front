import { FlexBox } from "components/common";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
}

const AllChallengeSuggestionList = ({ children }: Props) => {
  return (
    <FlexBox
      wrap="wrap"
      margin="2rem 0 0 0"
      background={COLOR.bg.primary}
      gap="1rem"
    >
      {children}
    </FlexBox>
  );
};

export default AllChallengeSuggestionList;
