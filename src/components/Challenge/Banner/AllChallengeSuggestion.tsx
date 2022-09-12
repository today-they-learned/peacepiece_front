import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useChallengeSuggestionListData } from "hooks/queries/challenge/suggestion";
import { ChallengeBanner } from "components/Challenge";
import AllChallengeSuggestionList from "components/Challenge/AllChallengeSuggestionList";
import Loading from "pages/Loading";
import AllChallengeSuggestionPartialList from "../AllChallengeSuggestionPartialList";

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
      <AllChallengeSuggestionList>
        {isFetched &&
          data?.pages.map((page, index) => {
            return (
              <AllChallengeSuggestionPartialList
                key={`partial-list-${page?.data.current_page || index}`}
                suggestions={page?.data.results}
              />
            );
          })}
        <div style={{ width: "100%" }} ref={ref}>
          {isFetchingNextPage && <Loading />}
        </div>
      </AllChallengeSuggestionList>
    </ChallengeBanner>
  );
};

export default AllChallengeSuggestion;
