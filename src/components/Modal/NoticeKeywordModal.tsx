import { useState } from "react";
import COLOR from "constants/color";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import FlexBox from "components/common/FlexBox";
import AutoComplete from "components/Form/AutoComplete";
import { Icon, Label } from "semantic-ui-react";

interface Props {
  onClick: () => void;
}

const Box = styled.div`
  max-width: 12.5rem;
  margin-right: 0.2rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const TagLabel = styled(Label)`
  padding: 1rem !important;
  margin: 0 0.5rem 0.5rem 0 !important;
  font-size: 1rem !important;
  color: white !important;
  background: ${COLOR.bg.primary} !important;
`;

const NoticKeywordModal = ({ onClick }: Props) => {
  const [keywords] = useState([
    "일회용품_안_쓰기",
    "텀블러",
    "이_세상에는_다시_쓸_수_있는_물건이_많다",
    "친환경_습관_기르기",
    "일회용품_대신_텀블러",
    "에코백_활용",
  ]);

  const insertTags = () => {
    const newArr = [];
    for (let i = 0; i < keywords.length; i += 1) {
      newArr.push(
        <TagLabel>
          <FlexBox>
            <Box>{keywords[i]}</Box>
            <Icon name="delete" link />
          </FlexBox>
        </TagLabel>
      );
    }
    return newArr;
  };

  return (
    <FlexBox column position="relative">
      <AiOutlineClose
        color={COLOR.white}
        size="28"
        style={{ position: "absolute", right: 0, cursor: "pointer" }}
        onClick={onClick}
      />
      <FlexBox wrap="wrap" margin="2rem 0 1rem 0">
        {insertTags()}
      </FlexBox>
      <FlexBox>
        <AutoComplete />
      </FlexBox>
    </FlexBox>
  );
};

export default NoticKeywordModal;
