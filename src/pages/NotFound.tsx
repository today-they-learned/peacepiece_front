import { FlexTextBox, FlexBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";

const Img = styled.img`
  width: 50.5rem;
  height: 37.875rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 45rem;
    height: 33.75rem;
  }

  @media only screen and (max-width: 767px) {
    width: 80%;
    height: 60%;
    margin-top: 2rem;
  }
`;

const Text = styled.span`
  font-family: "Pr-Bold";
  font-size: 2.5rem;
  color: ${COLOR.white};
  margin: 0 0 4rem 0;

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const NotFound = () => {
  return (
    <FlexBox column alignItems="center" width="100%" height="100%">
      <Img src="/images/404.png" alt="404" />
      <Text>해당 페이지를 찾을 수 없습니다.</Text>
    </FlexBox>
  );
};

export default NotFound;
