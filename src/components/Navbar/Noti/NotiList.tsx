/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { css } from "@emotion/react";
import COLOR from "constants/color";
import { FlexBox, FlexTextBox } from "components/common";
import { useFromNow } from "hooks";
import { NotiType } from "types";

interface Props {
  notis: Array<NotiType>;
  newNoti?: boolean;
}

const NotiContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-height: 15rem;
  overflow-y: scroll;
  gap: 5px;
  transition: all ease 0.2s;
`;

const Text = styled.div`
  font-size: 0.8rem;
  font-family: "Pr-Regular";
`;

const EllipsisText = styled(Text)`
  max-width: 6.5rem;
  margin-left: 0.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const NotiBox = styled.div<{ newNoti: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0.5rem 0.3rem 0.4rem;
  border-radius: 5px;
  transition: all ease 0.2s;
  cursor: pointer;
  color: ${(props) =>
    props.newNoti ? COLOR.white : COLOR.font.disabled} !important;

  &:hover {
    background: ${COLOR.bg.primary};
  }
`;

const NotiList = ({ notis, newNoti }: Props) => {
  const navigate = useNavigate();
  const [notiList] = useState(
    notis.filter((noti) => (newNoti ? !noti.is_viewed : noti))
  );

  const onClickNoti = (noti: NotiType) => {
    if (noti.notice_category === "category") {
      navigate(`/challenge/${noti.challenge.id}`);
    } else {
      navigate(`/piece/${noti.article.id}`);
    }
  };

  return (
    <NotiContainer>
      {!notiList.length && newNoti && (
        <NotiBox
          newNoti
          css={css`
            cursor: default;
            margin-bottom: 0.5rem;
            align-items: center;
            &:hover {
              background: transparent;
            }
          `}
        >
          <FlexTextBox margin="5px 0.5rem 0 0" fontSize="1.8rem">
            🤫
          </FlexTextBox>
          <FlexBox column>
            <Text>새로운 알림이 없어요</Text>
          </FlexBox>
        </NotiBox>
      )}
      {!notiList.length && !newNoti && (
        <NotiBox
          newNoti
          css={css`
            cursor: default;
            margin-bottom: 0.5rem;
            align-items: center;
            &:hover {
              background: transparent;
            }
          `}
        >
          <FlexTextBox margin="5px 0.5rem 0 0" fontSize="1.8rem">
            🤫
          </FlexTextBox>
          <FlexBox column>
            <Text>아직 받은 알림이 없어요</Text>
          </FlexBox>
        </NotiBox>
      )}
      {notiList.map((noti) => (
        <FlexBox key={`notification_${noti.id}`}>
          {noti.notice_category === "category" ? (
            <NotiBox
              newNoti={!noti.is_viewed}
              onClick={() => onClickNoti(noti)}
            >
              <FlexTextBox margin="5px 0.5rem 0 0" fontSize="1.8rem">
                👀
              </FlexTextBox>
              <FlexBox column>
                <Text>
                  {noti.category.title} 카테고리 챌린지가 새로 올라왔어요.
                  보러가볼까요?
                </Text>
                <FlexTextBox
                  fontSize="0.65rem"
                  fontFamily="Pr-Regular"
                  color={COLOR.font.disabled}
                >
                  {useFromNow(noti.created_at)}
                </FlexTextBox>
              </FlexBox>
            </NotiBox>
          ) : (
            <NotiBox
              newNoti={!noti.is_viewed}
              onClick={() => onClickNoti(noti)}
            >
              <FlexTextBox margin="5px 0.5rem 0 0" fontSize="1.8rem">
                ✍️
              </FlexTextBox>
              <FlexBox column>
                <FlexBox wrap="wrap" gap="0 2px">
                  <Text>{noti.contributor.username} 님이</Text>
                  <EllipsisText> {noti.article.content}</EllipsisText>
                  <Text>글에</Text>
                  <Text>댓글을 남겼습니다.</Text>
                </FlexBox>
                <FlexTextBox
                  fontSize="0.65rem"
                  fontFamily="Pr-Regular"
                  color={COLOR.font.disabled}
                >
                  {useFromNow(noti.created_at)}
                </FlexTextBox>
              </FlexBox>
            </NotiBox>
            // </Link>
          )}
        </FlexBox>
      ))}
    </NotiContainer>
  );
};

NotiList.defaultProps = { newNoti: false };

export default NotiList;
