import styled from "styled-components";
import COLOR from "constants/color";

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${COLOR.bg.modalShadow};
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <Background>
    <img src="/images/spinner.gif" alt="로딩중" width="10%" />
  </Background>
);

export default Loading;
