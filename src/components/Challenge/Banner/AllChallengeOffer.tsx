import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useChallengeSuggestionListData } from "hooks/queries/challenge/suggestion";
import { ChallengeBanner } from "components/Challenge";
import AllChallengeOfferList from "components/Challenge/AllChallengeOfferList";

const script = {
  title: "😎 챌린지 제안 모아보기",
};

const AllChallengeOffer = () => {
  const { ref, inView } = useInView();
  const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useChallengeSuggestionListData();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <ChallengeBanner title={script.title} width="76rem">
      {isFetched &&
        data.pages.map((page, index) => {
          return (
            <AllChallengeOfferList
              key={page?.data.current_page || index}
              suggestions={page?.data.results}
            />
          );
        })}
      <div ref={ref}>{isFetchingNextPage && "Loading more..."}</div>
    </ChallengeBanner>
  );
};

export default AllChallengeOffer;
