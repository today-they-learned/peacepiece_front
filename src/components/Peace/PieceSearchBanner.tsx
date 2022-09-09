import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { HiOutlineSearch } from "react-icons/hi";
import { ChallengeTitle } from "components/Challenge";

const script = {
  title: "글 검색하기",
};

const SearchInput = styled.input`
  width: 100%;
  height: 2.875rem;
  color: ${COLOR.font.secondary};
  font-family: "Pr-Medium";
  background-color: ${COLOR.bg.secondary};
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1rem;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
`;

const PieceSearchBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLOR.bg.primary};
  padding: 1.5rem;
  width: 100%;
  border-radius: 1.5rem;

  @media (max-width: 1000px) {
    padding: 1.2rem;
    border-radius: 1rem;
  }
`;

const PieceSearchBanner = () => {
  return (
    <PieceSearchBannerContainer>
      <ChallengeTitle title={script.title} background="trasparent" />

      <FlexBox position="relative" alignItems="center">
        <SearchInput placeholder="ex) 일회용품" />
        <SearchBtn>
          <HiOutlineSearch color={COLOR.font.primary} size="25" />
        </SearchBtn>
      </FlexBox>
    </PieceSearchBannerContainer>
  );
};
export default PieceSearchBanner;
