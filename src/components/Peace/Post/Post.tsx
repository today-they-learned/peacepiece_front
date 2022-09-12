import { useState } from "react";
import { Link } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { ArticleType } from "types";
import { useDate } from "hooks";
import ImageList from "./ImageList";

interface Props {
  article: ArticleType;
}

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const Emoji = styled.div<{ isFeedbacked: boolean }>`
  font-size: 13px;
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  margin-right: 0.7rem;
  font-family: ${(props) => (props.isFeedbacked ? "Pr-Bold" : "Pr-Regular")};
  color: ${(props) =>
    props.isFeedbacked ? COLOR.font.darkDefault : COLOR.white};
  background: ${(props) =>
    props.isFeedbacked ? COLOR.white : COLOR.btn.active};
`;

const Button = styled.button`
  color: ${COLOR.font.link};
  font-size: 0.8rem;
  font-family: "Pr-Bold";
  cursor: pointer;
`;

const Post = (props: Props) => {
  const { article } = props;
  const [textLimit, setTextLimit] = useState(
    Math.min(200, article.content.length)
  );

  return (
    <>
      {article.challenge && (
        <Link to={`/challenge/${article.challenge.id}`}>
          <FlexTextBox margin="0" color={COLOR.font.link}>
            [{article.challenge.title}] 챌린지
          </FlexTextBox>
        </Link>
      )}
      <FlexBox
        width="100%"
        height="auto"
        background={COLOR.bg.secondary}
        borderRadius="1.25rem"
        column
        padding="1rem 1.5rem"
        position="relative"
        margin="0"
      >
        <FlexBox background="transparent" alignItems="center" margin="0">
          <Avatar src={article.writer.avatar} />
          <FlexBox
            column
            justifyContent="center"
            background="transparent"
            margin="0 0 0 1rem"
          >
            <FlexTextBox
              fontSize="0.8rem"
              fontFamily="Pr-Bold"
              color={COLOR.font.primary}
            >
              {article.writer.username}
            </FlexTextBox>
            <FlexTextBox
              fontSize="0.625rem"
              fontFamily="Pr-Medium"
              color={COLOR.font.secondary}
            >
              {useDate(article.created_at)}
            </FlexTextBox>
          </FlexBox>
        </FlexBox>

        <FlexTextBox fontSize="1rem" fontFamily="Pr-Medium" padding="1rem 0">
          {article.content.slice(0, textLimit)}
          {textLimit !== article.content.length && (
            <Button onClick={() => setTextLimit(article.content.length)}>
              더보기
            </Button>
          )}
        </FlexTextBox>

        <ImageList article={article} />

        <FlexBox background="transparent">
          <Emoji isFeedbacked>👍 1</Emoji>
          <Emoji isFeedbacked={false}>🌱 0</Emoji>
          <Emoji isFeedbacked={false}>❤️ 0</Emoji>
          <Emoji isFeedbacked={false}>🚀 0</Emoji>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Post;
