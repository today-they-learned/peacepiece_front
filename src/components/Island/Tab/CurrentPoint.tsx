import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { useCurrentPointData } from "hooks/queries/point";
import styled from "styled-components";

const PointTypo = styled.p`
  font-family: "Pr-Bold";
  color: ${COLOR.font.primary};
`;

const CurrentPoint = () => {
  const { data, isFetched } = useCurrentPointData();

  return (
    <FlexBox background="transparent" column margin="0 0 0.5rem 0">
      <FlexTextBox fontSize="1.2rem" margin="0.2rem 0 0.9rem 0.5rem">
        <h3> 💰 피스 포인트 </h3>
      </FlexTextBox>
      <FlexBox
        width="100%"
        height="auto"
        borderRadius="5px"
        background={COLOR.bg.navSecondary}
        padding="1rem"
        justifyContent="center"
      >
        <PointTypo> {isFetched ? data.data.point : 0} </PointTypo>
        &nbsp;PP
      </FlexBox>
    </FlexBox>
  );
};

export default CurrentPoint;
