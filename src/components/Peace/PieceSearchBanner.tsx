import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { HiOutlineSearch } from "react-icons/hi";
import ChallengeBanner from "../Challenge/ChallengeBanner";

const script = {
  title: "글 검색하기",
};

const SearchInput = styled.input`
  width: 22rem;
  height: 2.875rem;
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

const PieceSearchBanner = () => {
  return (
    <ChallengeBanner title={script.title} width="24.6rem">
      <FlexBox position="relative" alignItems="center">
        <SearchInput placeholder="ex) 일회용품" />
        <SearchBtn>
          <HiOutlineSearch color={COLOR.font.primary} size="25" />
        </SearchBtn>
      </FlexBox>
    </ChallengeBanner>
  );
};
export default PieceSearchBanner;
