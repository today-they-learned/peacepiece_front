import React from "react";
import styled from "styled-components";
import FlexBox from "components/common/FlexBox";
import COLOR from "constants/color";

const Foot = styled.div`
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${COLOR.font.secondary};
  opacity: 0.4;
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;

const FootItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

const Label = styled.span`
  position: relative;
  width: 6rem;
  margin-top: 0.1rem;
  font-size: 0.8rem;
  color: ${COLOR.font.secondary};
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
`;

const MobileFootbar = () => {
  return (
    <Foot>
      <Line />
      <FlexBox padding="1.5rem 1rem">
        <Logo src="images/logo.png" />
        <FootItems>
          <Label>서비스 소개</Label>
          <Label>이용약관</Label>
          <Label>개인정보처리방침</Label>
          <Label>팀원 소개</Label>
        </FootItems>
      </FlexBox>
      <FlexBox padding="0rem 1rem">
        <Line />
      </FlexBox>
      <FlexBox padding="0.8rem 1rem">
        <Label style={{ width: "12rem" }}>Team TTL | PeacePice</Label>
      </FlexBox>
    </Foot>
  );
};

export default MobileFootbar;
