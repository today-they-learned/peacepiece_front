import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useChallengeSuggestionListData } from "hooks/queries/challenge/suggestion";
import { ChallengeBanner } from "components/Challenge";
import AllChallengeSuggestionList from "components/Challenge/AllChallengeSuggestionList";

const script = {
  title: "😎 챌린지 제안 모아보기",
};

const AllChallengeSuggestion = () => {
  const { ref, inView } = useInView();
  const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useChallengeSuggestionListData();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <ChallengeBanner title={script.title} width="100%" padding="2rem">
      {isFetched &&
        data?.pages.map((page, index) => {
          return (
            <AllChallengeSuggestionList
              key={page?.data.current_page || index}
              suggestions={page?.data.results}
            />
          );
        })}
      <div ref={ref}>{isFetchingNextPage && "로딩중..."}</div>
    </ChallengeBanner>
  );
};

export default AllChallengeSuggestion;
