import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { HiOutlineSearch } from "react-icons/hi";
import ChallengeBanner from "components/Challenge/ChallengeBanner";
import { useInput } from "hooks";

const script = {
  title: "글 검색하기",
};

const SearchInput = styled.input`
  width: 22rem;
  height: 2.875rem;
  color: ${COLOR.white};
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
  cursor: pointer;
`;

const PieceSearchBanner = () => {
  const navigate = useNavigate();
  const [keyword, onChangeKeyword] = useInput();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate(`/piece/search/${keyword}`);
  };

  return (
    <ChallengeBanner title={script.title} width="24.6rem">
      <FlexBox position="relative" alignItems="center">
        <form onSubmit={handleSubmit}>
          <SearchInput
            placeholder="ex) 일회용품"
            value={keyword}
            onChange={onChangeKeyword}
          />
          <SearchBtn type="submit">
            <HiOutlineSearch color={COLOR.font.primary} size="25" />
          </SearchBtn>
        </form>
      </FlexBox>
    </ChallengeBanner>
  );
};
export default PieceSearchBanner;
