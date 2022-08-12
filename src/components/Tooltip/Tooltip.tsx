import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import FlexBox from "components/common/FlexBox";

export interface Props {
  children: React.ReactNode;
  top: string;
  left: string;
}

const Container = styled.div`
  width: 14rem;
  height: 10rem;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  top: ${(p: Props) => p.top};
  left: ${(p: Props) => p.left};
  z-index: 10;
`;

const Tooltip = styled.div`
  position: relative;
  margin-bottom: 0.25rem;
  padding: 0.6rem 1.2rem 0.6rem 1.2rem;
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

const HoverTooltip = (props: Props) => {
  const { children, top, left } = props;
  const [hover, setHover] = useState(false);

  return (
    <Container top={top} left={left}>
      <FlexBox margin="0 0 0 1rem">
        <Icon
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          name="question circle"
          size="large"
          color="grey"
          link
        />
      </FlexBox>
      {hover ? <Tooltip>{children}</Tooltip> : ""}
    </Container>
  );
};

export default HoverTooltip;
