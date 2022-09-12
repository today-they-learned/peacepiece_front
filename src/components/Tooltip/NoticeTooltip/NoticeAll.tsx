import styled from "styled-components";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { useFromNow } from "hooks";

const dummyData = [
  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
      email: "",
      avatar: "",
    },
    article: {
      id: 1,
      content: "플로깅 하러가자 일상 속 작은 습관이 모여 환경을 블라블라~",
      created_at: "2022-09-12T12:10:53.265788+09:00",
    },
    is_viewed: false,
    category: "challenge",
  },
  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
    },
    article: {
      id: 1,
      content: "플로깅 하러가자 일상 속 작은 습관이 모여 환경을 블라블라",
      created_at: "2022-09-12T01:10:53.265788+09:00",
    },
    is_viewed: false,
    category: "category",
  },
  {
    id: 1,
    contributor: {
      id: 1,
      username: "김신건",
    },
    article: {
      id: 1,
      content: "플로깅 하러가자 일상 속 작은 습관이 모여 환경을 블라블라",
      created_at: "2022-08-30T01:10:53.265788+09:00",
    },
    is_viewed: true,
    category: "category",
  },
];

const Text = styled.div`
  max-width: 6rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  font-family: "Pr-Regular";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const NoticeAll = () => {
  return (
    <FlexBox width="15rem" column>
      {dummyData.map((data) => (
        <FlexBox margin="0 0 0.4rem 0" key={`notification_${data.id}`}>
          {data.category === "category" && (
            <>
              <FlexTextBox fontSize="1.8rem">👀</FlexTextBox>
              <FlexBox column>
                <FlexTextBox
                  fontSize="0.8rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                >
                  플로깅 카테고리 챌린지가 새로 올라왔어요. 보러가볼까요?
                </FlexTextBox>
                <FlexTextBox
                  fontSize="0.65rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                  color={COLOR.font.disabled}
                >
                  {useFromNow(data.article.created_at)}
                </FlexTextBox>
              </FlexBox>
            </>
          )}
          {data.category !== "category" && (
            <>
              <FlexTextBox fontSize="1.8rem">✍️</FlexTextBox>
              <FlexBox column>
                <FlexBox wrap="wrap" margin="0 0 0 0.5rem">
                  <FlexTextBox fontSize="0.8rem" fontFamily="Pr-Regular">
                    {data.contributor.username}님이
                  </FlexTextBox>
                  <Text> {data.article.content}</Text>
                  <FlexTextBox fontSize="0.8rem" fontFamily="Pr-Regular">
                    글에 댓글을 남겼습니다.
                  </FlexTextBox>
                </FlexBox>
                <FlexTextBox
                  fontSize="0.65rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                  color={COLOR.font.disabled}
                >
                  {useFromNow(data.article.created_at)}
                </FlexTextBox>
              </FlexBox>
            </>
          )}
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default NoticeAll;
