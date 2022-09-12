import styled from "styled-components";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { useFromNow } from "hooks";

type Notice = {
  id: number;
  contributor: {
    id: number;
    username: string;
  };
  article: {
    id: number;
    content: string;
    category: string;
    created_at: string;
  };
  is_viewed: boolean;
  category: string;
};

interface Props {
  dummyNotices: Array<Notice>;
}

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.8rem;
  height: auto;
  max-height: 15rem;
  overflow-y: scroll;
`;

const Text = styled.div`
  max-width: 7rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  color: ${COLOR.font.disabled};
  font-family: "Pr-Regular";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const NoticeAll = ({ dummyNotices }: Props) => {
  return (
    <NoticeContainer>
      {dummyNotices.map((data) => (
        <FlexBox margin="0 0 0.5rem 0" key={`notification_${data.id}`}>
          {data.category === "category" && (
            <>
              <FlexTextBox fontSize="1.8rem">👀</FlexTextBox>
              <FlexBox column>
                <FlexTextBox
                  fontSize="0.8rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                  color={COLOR.font.disabled}
                >
                  {data.article.category} 카테고리 챌린지가 새로 올라왔어요.
                  보러가볼까요?
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
                  <FlexTextBox
                    fontSize="0.8rem"
                    fontFamily="Pr-Regular"
                    color={COLOR.font.disabled}
                  >
                    {data.contributor.username}님이
                  </FlexTextBox>
                  <Text> {data.article.content}</Text>
                  <FlexTextBox
                    fontSize="0.8rem"
                    fontFamily="Pr-Regular"
                    color={COLOR.font.disabled}
                  >
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
    </NoticeContainer>
  );
};

export default NoticeAll;
