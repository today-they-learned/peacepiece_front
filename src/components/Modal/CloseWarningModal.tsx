import { FlexTextBox } from "components/common";
import COLOR from "constants/color";
import ModalFrame from "./ModalFrame";

const CloseWarningModal = () => (
  <ModalFrame
    modalMainColor={COLOR.font.danger}
    width="52.25rem"
    height="23.56rem"
    title="작성하던 내용이 사라질 수 있어요!"
    btnTitle1="다시 작성하러 가기"
    btnTitle2="괜찮아요"
  >
    <FlexTextBox
      fontSize="1.25rem"
      fontFamily="Pr-Bold"
      color={COLOR.white}
      margin="2rem 0 0 0"
    >
      작성중인 내용은 저장되지 않아요. 정말 작성을 그만두시나요? 🥺
    </FlexTextBox>
  </ModalFrame>
);

export default CloseWarningModal;
