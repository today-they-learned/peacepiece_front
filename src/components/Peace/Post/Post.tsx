/* eslint-disable react/jsx-curly-brace-presence */
import { useState, useRef, useMemo } from "react";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import ArticleInterface from "types/article";

interface Props {
  backgroundColor?: string;
  color?: string;
  size?: string;
  article: ArticleInterface;
}

const defaultProps = {
  backgroundColor: "white",
  color: "black",
  size: "3.2rem",
};

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

const Image = styled.img`
  flex: 1;
  max-width: 10rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
`;

const LastImage = styled.img`
  width: 100%;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
  opacity: 0.3;
  position: relative;
`;

const Emoji = styled.div<{ color?: string; backgroundColor: string }>`
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  margin-right: 0.7rem;
`;

const Button = styled.button`
  color: ${COLOR.font.link};
  font-size: 0.8rem;
  font-family: "Pr-Bold";
  cursor: pointer;
`;

const ImageListContainer = styled.div`
  display: flex;
  margin: 0.5rem 0 1rem 0;

  max-width: 100%;
`;

const LastImageContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  max-width: 10rem;
`;

const Post = ({ backgroundColor, color, size, article }: Props) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit = useRef<number>(200);

  const contentMore = useMemo(() => {
    const shortReview: string = article.content.slice(0, textLimit.current);

    if (article.content.length > textLimit.current) {
      if (isShowMore) {
        return article.content;
      }
      return shortReview;
    }
    return article.content;
  }, [isShowMore]);

  return (
    <>
      <FlexTextBox color={COLOR.font.link}>
        {"["}
        {article.challenge.title}
        {"] "}챌린지
      </FlexTextBox>
      <FlexBox
        width="100%"
        height="auto"
        background={COLOR.bg.secondary}
        borderRadius="1.25rem"
        column
        padding="1rem"
        position="relative"
        margin="0"
      >
        <FlexBox background="transparent" alignItems="center" margin="0">
          <Avatar
            src={`${process.env.PUBLIC_URL}/${article.writer.avatar}`}
            size={size}
          />
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
              {article.created_at}
            </FlexTextBox>
          </FlexBox>
        </FlexBox>

        <FlexTextBox fontSize="1rem" fontFamily="Pr-Medium" padding="1rem 0">
          {contentMore}
          <Button onClick={() => setIsShowMore(!isShowMore)}>
            {article.content.length > textLimit.current &&
              (isShowMore ? "닫기" : "더보기")}
          </Button>
        </FlexTextBox>

        <ImageListContainer>
          {article.images.slice(0, 3).map((image, idx) => {
            if (idx === 2) {
              return (
                <LastImageContainer>
                  <LastImage
                    src={`${process.env.PUBLIC_URL}/${image.file}`}
                    key={image.id}
                  />
                  <FlexTextBox
                    position="absolute"
                    right="50%"
                    bottom="30%"
                    fontSize="0.8rem"
                    fontFamily="Pr-Bold"
                  >
                    +{article.images.length - 3}
                  </FlexTextBox>
                </LastImageContainer>
              );
            }
            return (
              <Image
                src={`${process.env.PUBLIC_URL}/${image.file}`}
                key={image.id}
              />
            );
          })}
        </ImageListContainer>

        <FlexBox background="transparent">
          <Emoji backgroundColor={COLOR.btn.tooltip}>👍1</Emoji>
          <Emoji backgroundColor={backgroundColor} color={color}>
            🌱0
          </Emoji>
          <Emoji backgroundColor={backgroundColor} color={color}>
            ❤️0
          </Emoji>
          <Emoji backgroundColor={backgroundColor} color={color}>
            🚀0
          </Emoji>
        </FlexBox>
      </FlexBox>
    </>
  );
};
Post.defaultProps = defaultProps;

export default Post;
