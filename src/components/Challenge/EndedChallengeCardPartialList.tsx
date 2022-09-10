import { ChallengeType } from "types";
import ChallengeCard from "./Card/ChallengeCard";
import EndedChallengeCardWrapper from "./Card/EndedChallengeCardWrapper";

interface Props {
  challenges?: ChallengeType[];
}

const defaultProps: Props = {
  challenges: [],
};

const EndedChallengeCardPartialList = ({ challenges }: Props) => {
  return (
    <>
      {challenges.map((challenge) => (
        <EndedChallengeCardWrapper
          key={`ended-challenge-${challenge.id}`}
          gap="2rem"
        >
          <ChallengeCard challenge={challenge} />
        </EndedChallengeCardWrapper>
      ))}
    </>
  );
};

EndedChallengeCardPartialList.defaultProps = defaultProps;

export default EndedChallengeCardPartialList;
