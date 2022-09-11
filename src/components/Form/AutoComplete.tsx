import styled from "styled-components";
import useQueryDebounce from "hooks/useQueryDebounce";
import useInput from "hooks/useInput";
import { Search } from "semantic-ui-react";
import {
  useAddChallengeReminder,
  useChallengeCategoryData,
} from "hooks/queries/challenge/reminder";

const AutoCompleteInput = styled(Search)`
  width: 100% !important;
  .input {
    width: 100% !important;
    height: 3rem;
    border-radius: 0.5rem !important;
    font-family: "Pr-Regular" !important;
  }
  .input > input {
    height: 3rem;
    border-radius: 0.5rem !important;
    font-family: "Pr-Regular" !important;
  }
  .results {
    width: 100% !important;
    border-radius: 0.5rem !important;
    font-family: "Pr-Regular" !important;
    font-size: 0.95rem;

    .result {
      padding: 0.8rem 1rem !important;
    }

    > span {
      word-break: keep-all !important;
    }
    .empty > .header {
      font-weight: 400 !important;
      font-family: "Pr-Regular" !important;
    }
  }
`;

interface Category {
  id: number;
  title: string;
}

const resultRenderer = (category: Category) => <span>{category.title}</span>;

const AutoComplete = () => {
  const [keyword, onChangeKeyword, setKeyword] = useInput("");
  const debouncedKeyword = useQueryDebounce(keyword, 300);
  const { data, isLoading } = useChallengeCategoryData(debouncedKeyword);
  const { mutate: addReminder } = useAddChallengeReminder();

  const handleResultSelect = (e: Event, data: { result: { id: number } }) => {
    addReminder(data.result.id);
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
      noResultsMessage="검색 결과가 없습니다 😥"
    />
  );
};

export default AutoComplete;
