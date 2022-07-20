/* eslint-disable react/function-component-definition */
import React, { ReactNode, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
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

const Close = styled.img.attrs({
  src: "../../../x.png",
})`
  width: 1rem;
  height: 1rem;
  margin-left: 26%;
  margin-top: 0.9rem;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Line = styled.div`
  width: 100%;
  height: 0.06rem;
  background-color: #a3a3a3;
  opacity: 0.2;
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 28%;
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
  font-weight: bold;
  background-color: #ff4e4e;
  color: white;
  cursor: pointer;
`;

const Contents = styled.div`
  width: 70%;
  margin-right: 0;
`;

type NewType = {
  children: ReactNode;
};

const ModalFrame = ({ children }: NewType) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <Container>
      <ModalBlock>
        <ContentContainer>
          <Contents>{children}</Contents>
          <Close onClick={() => setModalIsOpen(false)} />
        </ContentContainer>
        <Line />
        <ButtonContainer>
          <BackButton>취소</BackButton>
          <ConfirmButton>확인</ConfirmButton>
        </ButtonContainer>
      </ModalBlock>
    </Container>
  );
};

export default ModalFrame;
