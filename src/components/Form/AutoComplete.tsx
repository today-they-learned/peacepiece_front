import styled from "styled-components";
import { Search } from "semantic-ui-react";

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

const categories = [
  { id: 1, title: "이_세상에는_다시_쓸_수_있는_물건이_많다" },
  { id: 2, title: "일회용품_안_쓰기" },
  { id: 3, title: "텀블러" },
];

const AutoComplete = () => {
  return (
    <AutoCompleteInput
      placeholder="알림 키워드를 입력하세요."
      // value={tech}
      // onSearchChange={onChangeTech}
      results={categories}
      // onResultSelect={handleResultSelect}
      // loading={loadTechstacksLoading}
      resultRenderer={resultRenderer}
    />
  );
};

export default AutoComplete;
