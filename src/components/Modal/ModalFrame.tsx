/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import FlexBox from "../common/FlexBox";
import FlexButton from "../common/FlexButton";

const ModalBlock = styled.div`
  width: 26rem;
  height: auto;
  border-radius: 0.8rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -13rem;
  margin-top: -6rem;
  padding: 1rem;
  background-color: white;
  box-shadow: 2px 2px 6px ${COLOR.bg.modalShadow};
  display: flex;
  flex-direction: column;
  animation: modal-show 1s;
`;

const Title = styled.div`
  width: 90%;
  padding: 1%;
  margin-right: 0;
  font-weight: bolder;
`;

const Close = styled.img.attrs({
  src: "../../../x.png",
})`
  width: 1rem;
  height: 1rem;
  margin-left: 6%;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 1%;
  height: 0.08rem;
  background-color: ${COLOR.font.secondary};
  opacity: 0.2;
`;

// 임시 모달 데이터
const data = {
  title: "정말 로그아웃 하시겠어요? ",
  content: "이것은 내용입니다. 블라블라 ~ 여기에 본문 내용을 ...... ",
};

const ModalFrame = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [modalData, setData] = useState(data);
  return (
    <ModalBlock>
      <FlexBox margin="1% 0 1% 0">
        <Title>{modalData.title}</Title>
        <Close onClick={() => setModalIsOpen(false)} />
      </FlexBox>
      <Line />

      <FlexBox margin="1%">{modalData.content}</FlexBox>

      <FlexBox margin="15% 0 0 60%">
        <FlexButton
          width="4.2rem"
          height="2rem"
          margin="0 0 0 0.4rem"
          backgroundColor="#a3a3a3"
        >
          취소
        </FlexButton>
        <FlexButton
          width="4.2rem"
          height="2rem"
          margin="0 0 0 0.8rem"
          backgroundColor="#ff4e4e"
        >
          로그아웃
        </FlexButton>
      </FlexBox>
    </ModalBlock>
  );
};

export default ModalFrame;
