import { FlexBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";

const Title = styled.a`
  font-family: "Pr-Bold";
  font-size: 1.05rem;
`;

const PointListPlaceholder = () => {
  return (
    <FlexBox
      width="100%"
      height="auto"
      borderRadius="5px"
      background={COLOR.bg.navSecondary}
      padding="1rem"
      justifyContent="center"
    >
      <Title>포인트 내역이 없습니다.</Title>
    </FlexBox>
  );
};

export default PointListPlaceholder;
