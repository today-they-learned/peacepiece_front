import { ChallengeTitle } from "components/Challenge";
import { FlexBox } from "components/common";
import EndedChallengeCardList from "components/Challenge/EndedChallengeCardList";
import EndedChallengeCardPartialList from "components/Challenge/EndedChallengeCardPartialList";
import { useChallengeEndedData } from "hooks/queries/challenge";

const script = {
  title: "📌 지난 챌린지",
};

const EndedChallenge = () => {
  const { data } = useChallengeEndedData(8);

  return (
    <FlexBox
      width="100%"
      justifyContent="center"
      padding="1rem"
      column
      margin="2rem 0 0 0"
    >
      <ChallengeTitle title={script.title} />
      <EndedChallengeCardList>
        {data?.pages.map((page, index) => (
          <EndedChallengeCardPartialList
            key={`ended-challenge-list-${page?.data.current_page || index}`}
            challenges={page?.data.results}
          />
        ))}
      </EndedChallengeCardList>
    </FlexBox>
  );
};

export default EndedChallenge;
