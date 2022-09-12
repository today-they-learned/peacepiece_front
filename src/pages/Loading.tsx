import styled from "styled-components";
import COLOR from "constants/color";

const Background = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  min-width: 5rem;
  min-height: 5rem;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-right: 5px solid ${COLOR.font.primary};
  border-radius: 50%;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => (
  <Background>
    <Spinner />
  </Background>
);

export default Loading;
