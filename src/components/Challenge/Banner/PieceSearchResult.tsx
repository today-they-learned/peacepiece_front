import { BannerBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";

const dummyData = {
  keyword: "일회용품",
  numOfPiece: "10",
};

const PrimaryText = styled.span`
  color: ${COLOR.font.primary};
  margin: 0 0.5rem;
`;

const PieceSearchResult = () => (
  <BannerBox width="52.5rem" height="4.875rem" padding="1.5rem">
    <FlexTextBox fontSize="1.56rem" fontFamily="Pr-Bold">
      <PrimaryText>{dummyData.keyword}</PrimaryText>에 대한 검색결과입니다. (총
      <PrimaryText>{dummyData.numOfPiece}</PrimaryText>개의 글)
    </FlexTextBox>
  </BannerBox>
);

export default PieceSearchResult;
