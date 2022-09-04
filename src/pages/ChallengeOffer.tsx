import AllChallengeOffer from "components/Challenge/Banner/AllChallengeOffer";
import ChallengeOfferInput from "components/Challenge/Banner/ChallengeOfferInput";
import { FlexBox } from "components/common";
import Writing from "components/Peace/Writing";

const ChallengeOffer = () => {
  return (
    <FlexBox
      column
      justifyContent="center"
      alignItems="center"
      margin="8rem 0 5rem 0 "
    >
      <ChallengeOfferInput />
      <AllChallengeOffer />
      <Writing />
    </FlexBox>
  );
};

export default ChallengeOffer;
