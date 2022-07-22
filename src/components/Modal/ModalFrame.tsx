/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
`;

const ModalBlock = styled.div`
  width: 28rem;
  height: 13rem;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  animation: modal-show 1s;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
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
  background-color: #a3a3a3;
  opacity: 0.2;
`;

const Content = styled.div`
  width: 100%;
  height: 60%;
  margin: 1%;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const BackButton = styled.button`
  width: 4.2rem;
  height: 2rem;
  border: 0;
  outline: 0;
  border-radius: 0.3rem;
  margin-left: 65%;
  font-size: 0.8rem;
  font-weight: bolder;
  background-color: #a3a3a3;
  color: white;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  width: 4.2rem;
  height: 2rem;
  border: 0;
  outline: 0;
  border-radius: 0.3rem;
  margin-left: 5%;
  font-size: 0.8rem;
  font-weight: bolder;
  background-color: #ff4e4e;
  color: white;
  cursor: pointer;
`;

// 임시 모달 데이터
const data = {
  title: "이것은 제목입니다 ?? ",
  content: "이것은 내용입니다. 블라블라 ~ 여기에 본문 내용을 ......",
};

const ModalFrame = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [modalData, setData] = useState(data);
  return (
    <Container>
      <ModalBlock>
        <TitleContainer>
          <Title>{modalData.title}</Title>
          <Close onClick={() => setModalIsOpen(false)} />
        </TitleContainer>
        <Line />

        <Content>{modalData.content}</Content>

        <ButtonContainer>
          <BackButton>취소</BackButton>
          <ConfirmButton>확인</ConfirmButton>
        </ButtonContainer>
      </ModalBlock>
    </Container>
  );
};

export default ModalFrame;
