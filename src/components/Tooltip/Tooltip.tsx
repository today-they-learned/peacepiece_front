import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import FlexBox from "components/common/FlexBox";

const Container = styled.div`
  width: 14rem;
  height: 5.8rem;
  margin-top: 10%;
  margin-left: 55%;
  display: flex;
  flex-direction: column-reverse;
`;

const Tooltip = styled.div`
  position: relative;
  margin-bottom: 0.25rem;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
  width: 14rem;
  height: 3.8rem;
  background: black;
  color: white;
  font-size: 13px;
  font-weight: bolder;
  :after {
    border-top: 0.9rem solid black;
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0rem solid transparent;
    content: "";
    position: absolute;
    bottom: -0.6rem;
    left: 1.4rem;
  }
`;

const HoverTooltip = () => {
  const [hover, setHover] = useState(false);

  return (
    <Container>
      <FlexBox margin="0 0 0 1rem">
        <Icon
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          name="question circle"
          size="large"
          color="grey"
        />
      </FlexBox>
      {hover ? (
        <Tooltip>챌린지 인증을 하면 PP포인트를 받을 수 있어요! 😎</Tooltip>
      ) : (
        ""
      )}
    </Container>
  );
};

export default HoverTooltip;
