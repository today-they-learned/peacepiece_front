import { ChallengeBanner } from "components/Challenge";
import EndedChallengeList from "components/Challenge/EndedChallengeList";
import { useChallengEndedData } from "hooks/queries/challenge";

const script = {
  title: "🙇‍♂️ 지난 챌린지",
  url: "/challenge/ended",
};

const EndedChallengeBanner = () => {
  const { data, isFetched } = useChallengEndedData(3);

  return (
    <ChallengeBanner title={script.title} url={script.url}>
      {isFetched && (
        <EndedChallengeList challenges={data.pages[0].data.results} />
      )}
    </ChallengeBanner>
  );
};

export default EndedChallengeBanner;
