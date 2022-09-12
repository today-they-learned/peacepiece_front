import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { HiOutlineSearch } from "react-icons/hi";
import { ChallengeTitle } from "components/Challenge";
import { useInput } from "hooks";

const script = {
  title: "글 검색하기",
};

const SearchInput = styled.input`
  width: 90%;
  height: 2.875rem;
  color: ${COLOR.white};
  font-family: "Pr-Medium";
  padding: 1rem;
  margin: 0;
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  cursor: pointer;
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
  const navigate = useNavigate();
  const [keyword, onChangeKeyword, setKeyword] = useInput();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/piece/search/${keyword.trim()}`);
    }
  };

  return (
    <PieceSearchBannerContainer>
      <ChallengeTitle title={script.title} background="trasparent" />
      <form onSubmit={handleSubmit}>
        <FlexBox
          position="relative"
          alignItems="center"
          background={COLOR.bg.secondary}
          borderRadius="1rem"
          margin="1.3rem 0 0 0"
        >
          <SearchInput
            placeholder="ex) 일회용품"
            value={keyword}
            onChange={onChangeKeyword}
          />
          <SearchBtn type="submit">
            <HiOutlineSearch color={COLOR.font.primary} size="25" />
          </SearchBtn>
        </FlexBox>
      </form>
    </PieceSearchBannerContainer>
  );
};
export default PieceSearchBanner;
