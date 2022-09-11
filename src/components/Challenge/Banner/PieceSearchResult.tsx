import { BannerBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";

const PrimaryText = styled.span`
  color: ${COLOR.font.primary};
`;

interface Props {
  keyword: string;
  numOfPiece: number;
  isFetched: boolean;
}

const PieceSearchResult = ({ keyword, numOfPiece, isFetched }: Props) => {
  return (
    <BannerBox width="100%" margin="0">
      {isFetched ? (
        <FlexTextBox fontSize="1.56rem" fontFamily="Pr-Bold" lineHeight="2rem">
          {numOfPiece ? (
            <>
              <PrimaryText>{keyword}</PrimaryText>에 대한 검색결과입니다. &nbsp;
              (총
              <PrimaryText>{numOfPiece}</PrimaryText>개의 글)
            </>
          ) : (
            <>
              <PrimaryText>😥 {keyword}</PrimaryText>에 대한 검색결과가
              없습니다.
            </>
          )}
        </FlexTextBox>
      ) : (
        <FlexTextBox fontSize="1.56rem" fontFamily="Pr-Bold">
          검색중...
        </FlexTextBox>
      )}
    </BannerBox>
  );
};

export default PieceSearchResult;
