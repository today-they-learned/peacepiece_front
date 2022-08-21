import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "constants/color";
import { AiOutlineClose } from "react-icons/ai";
import FlexBox from "../common/FlexBox";
import FlexButton from "../common/FlexButton";

interface Props {
  children: React.ReactNode;
  titleColor?: string;
}

const defaultProps = {
  titleColor: "white",
};

const ModalBlock = styled.div`
  width: 45%;
  height: auto;
  border-radius: 0.8rem;
  display: flex;
  margin-left: 25%;
  padding: 1rem;
  background-color: ${COLOR.bg.default};
  display: flex;
  flex-direction: column;
  animation: modal-show 1s;
`;

const Title = styled.div<Props>`
  width: 100%;
  height: 4rem;
  margin-right: 0;
  color: ${(props) => props.color};
  font-size: 30px;
  font-weight: bold;
`;

// 임시 모달 데이터
const data = {
  title: "일회용품 No! 다시 쓰기 Yes! 챌린지 인증하기",
  content: "이것은 내용입니다. 블라블라 ~ 여기에 본문 내용을 ...... ",
};

const ModalFrame = (props: Props) => {
  const { children, titleColor } = props;
  const [modalData] = useState(data);
  return (
    <ModalBlock>
      <FlexBox padding="1%">
        <Title color={titleColor}>{modalData.title}</Title>
        <AiOutlineClose color={COLOR.white} size="28" />
      </FlexBox>

      <FlexBox padding="0 2% 0 2%">{children}</FlexBox>

      <FlexBox margin="15% 0 0 60%">
        <FlexButton
          width="9rem"
          height="2.8rem"
          margin="0 0 0 0.4rem"
          fontSize="1.5rem"
          backgroundColor={COLOR.bg.default}
        >
          취소
        </FlexButton>
        <FlexButton
          width="9rem"
          height="2.8rem"
          margin="0 0 0 0.8rem"
          color={COLOR.font.primary}
          fontSize="1.5rem"
          backgroundColor={COLOR.bg.primary}
        >
          확인
        </FlexButton>
      </FlexBox>
    </ModalBlock>
  );
};
ModalFrame.defaultProps = defaultProps;

export default ModalFrame;
