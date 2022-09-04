import styled from "styled-components";
import useQueryDebounce from "hooks/useQueryDebounce";
import useInput from "hooks/useInput";
import { Search } from "semantic-ui-react";
import { useChallengeCategoryData } from "hooks/queries/challenge/reminder";

const AutoCompleteInput = styled(Search)`
  .input > input {
    width: 15vw !important;
    height: 3rem;
    border-radius: 0.5rem !important;
    font-family: "Pr-Regular" !important;
  }
  .results {
    width: 15vw !important;
    border-radius: 0.5rem !important;
    font-family: "Pr-Regular" !important;
    font-size: 0.9rem;
  }
`;

interface Category {
  id: number;
  title: string;
}

const resultRenderer = (category: Category) => (
  <span style={{ maxWidth: "15vw", wordBreak: "keep-all" }}>
    {category.title}
  </span>
);

const AutoComplete = () => {
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const debouncedKeyword = useQueryDebounce(keyword, 200);
  const { data, isLoading } = useChallengeCategoryData(debouncedKeyword);

  const handleResultSelect = (e: Event, data: any) => {
    setKeyword("");
  };

  return (
    <AutoCompleteInput
      placeholder="알림 키워드를 입력하세요."
      value={keyword}
      onSearchChange={onChangeKeyword}
      results={data}
      onResultSelect={handleResultSelect}
      loading={isLoading}
      resultRenderer={resultRenderer}
    />
  );
};

export default AutoComplete;
