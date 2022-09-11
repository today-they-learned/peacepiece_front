import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";
import ChallengeBanner from "components/Challenge/ChallengeBanner";
import ChallengeConfirmModal from "components/Modal/ChallengeConfirmModal";
import { useUser } from "hooks";

const TemporaryContainer = styled.div`
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${COLOR.bg.default};
  cursor: pointer;
`;

const WritingContainer = styled(ChallengeBanner)``;

const Writing = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    if (user) {
      setModalVisible(true);
    } else {
      navigate("/sign");
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <WritingContainer
        title="피스 글쓰기"
        width="100%"
        titleColor={COLOR.font.primary}
        padding="2rem 2rem"
        margin="0"
      >
        <TemporaryContainer role="none" onClick={openModal}>
          <FlexTextBox
            fontSize="1rem"
            fontFamily="Pr-Bold"
            color={COLOR.font.disabled}
          >
            오늘은 환경을 위해 어떤 활동을 하셨나요? 모두에게 알려주세요😊
          </FlexTextBox>
        </TemporaryContainer>
      </WritingContainer>
      {modalVisible && (
        <ChallengeConfirmModal
          onClose={closeModal}
          visible={modalVisible}
          title="피스 글 작성하기"
          type="writing"
          text="피스 글을 작성해주세요"
        />
      )}
    </>
  );
};

export default Writing;
