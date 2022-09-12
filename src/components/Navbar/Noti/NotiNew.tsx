import styled from "styled-components";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { useFromNow } from "hooks";
import { NotiType } from "types";

interface Props {
  notis: Array<NotiType>;
}

const NotiContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 15rem;
  overflow-y: scroll;
  padding: 0 0.5rem;
`;

const Text = styled.div`
  max-width: 6.5rem;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  font-family: "Pr-Regular";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const NotiNew = ({ notis }: Props) => {
  return (
    <NotiContainer>
      {notis.map((data) => (
        <FlexBox margin="0 0 0.5rem 0" key={`notification_${data.id}`}>
          {data.notice_category === "category" && data.is_viewed === false && (
            <>
              <FlexTextBox fontSize="1.8rem">👀</FlexTextBox>
              <FlexBox column>
                <FlexTextBox
                  fontSize="0.8rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                >
                  {data.category.title} 카테고리 챌린지가 새로 올라왔어요.
                  보러가볼까요?
                </FlexTextBox>
                <FlexTextBox
                  fontSize="0.65rem"
                  fontFamily="Pr-Regular"
                  margin="0 0 0 0.5rem"
                  color={COLOR.font.disabled}
                >
                  {useFromNow(data.created_at)}
                </FlexTextBox>
              </FlexBox>
            </>
          )}
          {data.notice_category !== "category" && data.is_viewed === false && (
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
                  {useFromNow(data.created_at)}
                </FlexTextBox>
              </FlexBox>
            </>
          )}
        </FlexBox>
      ))}
    </NotiContainer>
  );
};

export default NotiNew;
