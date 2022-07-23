/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin-top: 3%;
  margin-left: 60%;
  width: 14rem;
  height: 11rem;
  background: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px gray;
  :after {
    border-top: 0px solid transparent;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid white;
    content: "";
    position: absolute;
    top: -9px;
    left: 11.5rem;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 33%;
`;

const Avatar = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  background-color: gray;
`;

const Line = styled.div`
  width: 85%;
  margin-top: 1%;
  margin-left: 7.5%;
  height: 0.07rem;
  background-color: #a3a3a3;
  opacity: 0.3;
`;

// 임시 모달 데이터
// const data = {
//   title: "이것은 제목입니다 ?? ",
//   content: "이것은 내용입니다. 블라블라 ~ 여기에 본문 내용을 ......",
// };

const ProfileModal = () => {
  return (
    <Container>
      <ProfileContainer>
        <Avatar />
      </ProfileContainer>

      <Line />
    </Container>
  );
};

export default ProfileModal;
