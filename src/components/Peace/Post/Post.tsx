/* eslint-disable react/jsx-curly-brace-presence */
import { useState, useRef, useMemo } from "react";
import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import dummyArticle from "./dummyArticle";

interface Props {
  backgroundColor?: string;
  color?: string;
  size?: string;
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
  width: 10rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
`;

const LastImage = styled.img`
  width: 10rem;
  height: 6.4rem;
  object-fit: cover;
  border-radius: 0.625rem;
  margin-right: 1rem;
  opacity: 0.3;
  position: relative;
`;

const Emoji = styled.div<Props>`
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

const Post = ({ backgroundColor, color, size }: Props) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const textLimit = useRef<number>(200);

  const contentMore = useMemo(() => {
    const shortReview: string = dummyArticle.content.slice(
      0,
      textLimit.current
    );

    if (dummyArticle.content.length > textLimit.current) {
      if (isShowMore) {
        return dummyArticle.content;
      }
      return shortReview;
    }
    return dummyArticle.content;
  }, [isShowMore]);

  return (
    <>
      <FlexTextBox color={COLOR.font.link}>
        {"["}
        {dummyArticle.challenge.title}
        {"] "}챌린지
      </FlexTextBox>
      <FlexBox
        width="48rem"
        height="auto"
        background={COLOR.bg.secondary}
        borderRadius="1.25rem"
        column
        padding="1rem"
        position="relative"
        margin="1rem 0 2rem 0"
      >
        <FlexBox
          background="transparent"
          alignItems="center"
          margin="0 0 0.5rem 0"
        >
          <Avatar
            src={`${process.env.PUBLIC_URL}/${dummyArticle.writer.avatar}`}
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
              {dummyArticle.writer.username}
            </FlexTextBox>
            <FlexTextBox
              fontSize="0.625rem"
              fontFamily="Pr-Medium"
              color={COLOR.font.secondary}
            >
              {dummyArticle.created_at}
            </FlexTextBox>
          </FlexBox>
        </FlexBox>

        <FlexTextBox fontSize="0.8rem" fontFamily="Pr-Medium">
          {contentMore}
          <Button onClick={() => setIsShowMore(!isShowMore)}>
            {dummyArticle.content.length > textLimit.current &&
              (isShowMore ? "닫기" : "더보기")}
          </Button>
        </FlexTextBox>

        <FlexBox background="transparent" margin="0.5rem 0 1rem 0">
          {dummyArticle.images.slice(0, 3).map((image, idx) => {
            if (idx === 2) {
              return (
                <FlexBox position="relative" background="transparent">
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
                    +{dummyArticle.images.length - 3}
                  </FlexTextBox>
                </FlexBox>
              );
            }
            return (
              <Image
                src={`${process.env.PUBLIC_URL}/${image.file}`}
                key={image.id}
              />
            );
          })}
        </FlexBox>

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
