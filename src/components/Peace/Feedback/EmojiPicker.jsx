import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { init } from "emoji-mart";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ko from "components/Peace/Feedback/emoji-mart.locale.ko";
import { MdOutlineAddReaction } from "react-icons/md";
import { FlexBox } from "components/common";
import COLOR from "constants/color";
import { useAddArticleFeedback } from "hooks/queries/article";

const PickerPosition = styled.div`
  position: absolute;
  bottom: 27%;
  left: 1%;
  z-index: 999;
`;

const Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;
  max-height: 30px;
  font-size: 14px;
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-family: ${(props) => (props.isFeedbacked ? "Pr-Bold" : "Pr-Regular")};
  color: ${(props) =>
    props.isFeedbacked ? COLOR.font.darkDefault : COLOR.white};
  background: ${(props) =>
    props.isFeedbacked ? COLOR.white : COLOR.btn.active};
`;

const EmojiPicker = ({ challengeId }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  const { mutate: addFeedback } = useAddArticleFeedback(challengeId);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handletrigger = () => {
    if (open) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  const handleSelect = (e) => {
    addFeedback(e.id);
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  init({ data });
  return (
    <div>
      <Emoji onClick={handletrigger}>
        <FlexBox center margin="0.1rem">
          <MdOutlineAddReaction size="1.2rem" />
        </FlexBox>
      </Emoji>
      {open && (
        <PickerPosition ref={ref}>
          <Picker
            i18n={ko}
            data={data}
            theme="dark"
            onEmojiSelect={handleSelect}
          />
        </PickerPosition>
      )}
    </div>
  );
};

export default EmojiPicker;
