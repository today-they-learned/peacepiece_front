import styled from "styled-components";
import COLOR from "constants/color";
import { NotiTab } from "./index";

const Container = styled.div`
  position: relative;
  margin-top: 5%;
  margin-left: 60%;
  padding: 0.6rem;
  min-width: 19rem;
  border-radius: 0.6rem;
  z-index: 10;
  background: ${COLOR.bg.secondary};

  :after {
    border-top: 0px solid transparent;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: 1.5rem solid ${COLOR.bg.secondary};
    content: "";
    position: absolute;
    top: -0.8rem;
    left: 10.5rem;
    z-index: 10;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 0;

    :after {
      left: 11.6rem;
    }
  }
`;

const Box = styled.div`
  position: relative;
  top: 0.8rem;
  left: -11.75rem;
`;

const Noti = () => {
  return (
    <Box>
      <Container>
        <NotiTab />
      </Container>
    </Box>
  );
};

export default Noti;
