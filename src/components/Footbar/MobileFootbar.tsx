/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import styled from "styled-components";
import FlexBox from "components/common/FlexBox";
import { useNavigate } from "react-router-dom";

const Foot = styled.div`
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #a3a3a3;
  opacity: 0.4;
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const FootItems = styled.div`
  display: flex;
  margin-left: 9%;
  justify-content: space-between;
  width: 68%;
`;

const Label = styled.span`
  position: relative;
  width: 6rem;
  margin-top: 0.1rem;
  font-size: 0.8rem;
  color: #a3a3a3;
  opacity: 0.7;
  text-align: center;
  cursor: pointer;
`;

const MobileFootbar = () => {
  const navigate = useNavigate();
  return (
    <Foot>
      <Line />
      <FlexBox padding="2rem 1rem">
        <Logo src="images/logo.png" />
        <FootItems>
          <Label
            onClick={() => {
              navigate("/serviceintro");
            }}
          >
            서비스 소개
          </Label>
          <Label
            onClick={() => {
              navigate("/term");
            }}
          >
            이용약관
          </Label>
          <Label
            onClick={() => {
              navigate("/privacy");
            }}
          >
            개인정보처리방침
          </Label>
          <Label
            onClick={() => {
              navigate("/crewintro");
            }}
          >
            팀원 소개
          </Label>
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
