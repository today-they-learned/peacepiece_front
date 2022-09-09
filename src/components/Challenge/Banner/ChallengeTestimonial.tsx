import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useChallengeArticleData } from "hooks/queries/challenge";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { ArticleType } from "types";
import { ChallengeBanner } from "components/Challenge";
import TestimonialCard from "components/Challenge/Card/TestimonialCard";
import COLOR from "constants/color";
import ChallengeConfirmModal from "components/Modal/ChallengeConfirmModal";

const TemporaryContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  padding: 0 0 0 2rem;
  margin: 2rem 0 0 0;
  background: ${COLOR.bg.default};
`;

const script = {
  title: "챌린지 인증",
};

const ChallengeTestimonial = () => {
  const { id } = useParams();
  const { ref, inView } = useInView();
  const [modalVisible, setModalVisible] = useState(false);

  const { isFetched, data, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useChallengeArticleData(id);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ChallengeBanner
        title={script.title}
        width="100%"
        titleColor={COLOR.font.primary}
        padding="2rem 3rem"
      >
        <TemporaryContainer role="none" onClick={openModal}>
          <FlexTextBox
            fontSize="1.25rem"
            fontFamily="Pr-Bold"
            color={COLOR.font.disabled}
          >
            챌린지를 달성했나요? 모두에게 인증해주세요!
          </FlexTextBox>
        </TemporaryContainer>
        <Divider style={{ width: "100%", margin: "2rem 0 " }} />
        <FlexBox
          column
          background="transparent"
          justifyContent="center"
          alignItems="center"
        >
          {isFetched &&
            data.pages.map((page, index) => {
              return (
                <Fragment key={page?.data.current_page || index}>
                  {page?.data.results.map((article: ArticleType) => (
                    <TestimonialCard key={article.id} piece={article} />
                  ))}
                </Fragment>
              );
            })}
        </FlexBox>
        <div ref={ref}>{isFetchingNextPage && "Loading more..."}</div>
      </ChallengeBanner>
      {modalVisible && (
        <ChallengeConfirmModal
          onClose={closeModal}
          visible={modalVisible}
          title="일회용품 No! 다시 쓰기 Yes!"
          type="writing"
          subTitle
        />
      )}
    </>
  );
};

export default ChallengeTestimonial;
