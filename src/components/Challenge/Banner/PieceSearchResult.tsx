import { BannerBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";

const PrimaryText = styled.span`
  color: ${COLOR.font.primary};
  margin: 0 0.5rem;
`;

interface Props {
  keyword: string;
  numOfPiece: number;
  isFetched: boolean;
}

const PieceSearchResult = ({ keyword, numOfPiece, isFetched }: Props) => {
  return (
    <BannerBox width="100%" height="4.875rem" padding="1.5rem" margin="0">
      <FlexTextBox fontSize="1.56rem" fontFamily="Pr-Bold">
        {numOfPiece ? (
          <>
            <PrimaryText>{keyword}</PrimaryText>에 대한 검색결과입니다. (총
            <PrimaryText>{numOfPiece}</PrimaryText>개의 글)
          </>
        ) : (
          isFetched && (
            <PrimaryText>{keyword}에 대한 검색결과가 없습니다.</PrimaryText>
          )
        )}
      </FlexTextBox>
    </BannerBox>
  );
};

export default PieceSearchResult;
