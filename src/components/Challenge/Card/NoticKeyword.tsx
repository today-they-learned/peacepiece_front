import { useState } from "react";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import Tooltip from "components/Tooltip/Tooltip";
import FlexButton from "components/common/FlexButton";
import FlexBox from "components/common/FlexBox";

const NoticKeyword = () => {
  const [keywords] = useState([
    "일회용품_안_쓰기",
    "텀블러",
    "이_세상에는_다시_쓸_수_있는_물건이_많다",
  ]);

  return (
    <BannerBox
      width="24.6rem"
      height="18.37rem"
      padding="1.8rem 0.5rem 1.8rem 0.5rem"
    >
      <FlexBox>
        <FlexTextBox
          fontSize="1.56rem"
          color={COLOR.font.primary}
          margin="0.2rem 0 1rem 1.2rem"
        >
          권소예
        </FlexTextBox>
        <FlexTextBox fontSize="1.56rem" margin="0.2rem 0.4rem 1rem 0">
          님의 알림 키워드
        </FlexTextBox>
        <Tooltip text="알림 설정을 한 키워드의 챌린지가 올라왔을 때, 이메일로 알려드릴게요 😇" />
      </FlexBox>
      <BannerBox
        width="21.6rem"
        height="10.75rem"
        padding="1rem 0.3rem 1rem 0.4rem"
        theme="secondary"
      >
        <FlexButton margin="0 0 0 15rem" fontSize="0.9rem">
          수정하기{">"}
        </FlexButton>
        <FlexBox margin="0.5rem" wrap="wrap">
          {keywords.map((keyword: string) => (
            <FlexTextBox
              key={keyword}
              height="18px"
              margin="0 0.5rem 1rem 0"
              fontSize="1.1rem"
            >
              #{keyword}
            </FlexTextBox>
          ))}
        </FlexBox>
      </BannerBox>
    </BannerBox>
  );
};

export default NoticKeyword;
