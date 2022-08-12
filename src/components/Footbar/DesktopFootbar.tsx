/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import styled, { css } from "styled-components";
import COLOR from "constants/color";
import FlexBox from "components/common/FlexBox";

const Foot = styled.div`
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #a3a3a3;
  opacity: 0.4;
`;

const Logo = styled.span`
  color: ${COLOR.font.primary};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const FootItems = styled.div`
  display: flex;
  margin-left: 5%;
  justify-content: space-around;
  width: 55%;
`;

const Label = styled.span`
  position: relative;
  width: 10rem;
  font-size: 15px;
  color: #a3a3a3;
  opacity: 0.6;
  text-align: center;
  cursor: pointer;
`;

const Footbar = () => {
  return (
    <Foot>
      <Line />
      <FlexBox padding="2rem 10rem">
        <Logo>PeacePiece</Logo>
        <FootItems>
          <Label>서비스 소개</Label>
          <Label>이용약관</Label>
          <Label>개인정보처리방침</Label>
          <Label>팀원 소개</Label>
        </FootItems>
      </FlexBox>
      <FlexBox padding="0rem 9rem">
        <Line />
      </FlexBox>
      <FlexBox padding="0.8rem 9rem">
        <Label style={{ width: "12rem" }}>Team TTL | PeacePice</Label>
      </FlexBox>
    </Foot>
  );
};

export default Footbar;
