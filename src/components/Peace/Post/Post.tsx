import { useState } from "react";
import { Link } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { ArticleType } from "types";
import { useDate, useUser } from "hooks";
import ImageList from "components/Peace/Post/ImageList";
import EmojiPicker from "components/Peace/Feedback/EmojiPicker";
import Emoji from "components/Peace/Feedback/Emoji";

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

const Button = styled.button`
  color: ${COLOR.font.link};
  font-size: 0.8rem;
  font-family: "Pr-Bold";
  cursor: pointer;
`;

const Post = (props: Props) => {
  const { article } = props;
  const { user } = useUser();
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

        <FlexBox background="transparent" wrap="wrap" gap="7px">
          {!!article.feedbacks.length &&
            article?.feedbacks?.map((feedback) => (
              <Emoji
                key={`article_${article.id}_feedback_${feedback.feedback.id}`}
                articleId={article.id}
                emoji={feedback.feedback.emoji}
                isFeedbacked={feedback.is_feedbacked}
              >
                {feedback.count}
              </Emoji>
            ))}
          {user && <EmojiPicker challengeId={article.id} />}
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Post;
