import styled from "styled-components";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { userPointListData } from "hooks/queries/point";
import PointPartialList from "./PointPartialList";
import PointListPlaceholder from "./PointListPlaceholder";

const PointContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Point = () => {
  const { ref, inView } = useInView();
  const { data, isFetched, isFetchingNextPage, hasNextPage, fetchNextPage } =
    userPointListData();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <PointContainer>
      {isFetched &&
        (data.pages && data.pages[0]?.data.total_count > 0 ? (
          data.pages.map((page) => (
            <PointPartialList
              key={`point-partial-list-${page?.data.current_page}`}
              points={page?.data.results}
            />
          ))
        ) : (
          <PointListPlaceholder />
        ))}
      <div style={{ width: "100%" }} ref={ref}>
        {isFetchingNextPage && "로딩중"}
      </div>
    </PointContainer>
  );
};

export default Point;
