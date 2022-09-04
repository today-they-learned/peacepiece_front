import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import dummyData from "./dummyData";

const defaultProps = {
  backgroundColor: "white",
  color: "black",
  size: "3.2rem",
};

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

const CommentContainer = () => {
  return (
    <FlexBox
      width="45rem"
      height="auto"
      background={COLOR.bg.secondary}
      borderRadius="1.25rem"
      padding="1rem"
      margin="1rem 0 0 0"
      position="relative"
      column
    >
      <FlexBox>
        <Avatar
          src={`${process.env.PUBLIC_URL}/${dummyData.writer.avatar}`}
          size="2rem"
        />
        <FlexBox
          padding="0.4rem 0.7rem"
          margin="0 0 1rem 1rem"
          borderRadius="0.6rem"
          background={COLOR.bg.nav}
        >
          <FlexTextBox fontSize="13px" fontFamily="Pr-Medium">
            와! 고생하셨어요!
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <Avatar
          src={`${process.env.PUBLIC_URL}/${dummyData.writer.avatar}`}
          size="2rem"
        />
        <FlexBox
          padding="0.4rem 0.7rem"
          margin="0 0 1rem 1rem"
          borderRadius="0.6rem"
          background={COLOR.bg.nav}
        >
          <FlexTextBox fontSize="13px" fontFamily="Pr-Medium">
            각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에
            관하여 관계 행정기관에 필요한 지시를 할 수 있다. 헌법재판소는 법관의
            자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.
          </FlexTextBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
CommentContainer.defaultProps = defaultProps;

export default CommentContainer;
