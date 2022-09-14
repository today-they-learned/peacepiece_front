import styled from "styled-components";
import COLOR from "constants/color";
import { init } from "emoji-mart";
import data from "@emoji-mart/data";

const EmojiContainer = styled.div`
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

const Emoji = ({ id, children, isFeedbacked }) => {
  init({ data });

  return (
    <EmojiContainer isFeedbacked={isFeedbacked}>
      <em-emoji id={id}>{children}</em-emoji>
    </EmojiContainer>
  );
};

export default Emoji;
