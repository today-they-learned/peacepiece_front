/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-pascal-case */
import { useTextArea, useUser } from "hooks";
import { useAddChallengeSuggestion } from "hooks/queries/challenge/suggestion";
import { FlexBox, FlexTextBox } from "components/common";
import { Textarea } from "components/Form";
import { ChallengeBanner } from "components/Challenge";
import { styled as style } from "@mui/material/styles";
import styled from "styled-components";
import * as TooltipLib from "@mui/material/Tooltip";
import { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import COLOR from "constants/color";

const script = {
  title: "🌱 챌린지 제안하기",
  text: "어떤 챌린지가 PeacePiece에서 열리면 좋을까요? 다양한 생각을 공유해주세요",
};

const Btn = styled.button<{ value?: string }>`
  margin: 0;
  font-size: 1.1rem;
  font-family: "Pr-Bold";
  padding: 0.6rem 1.5rem;
  border-radius: 0.62rem;
  background: ${(props) =>
    props.value ? COLOR.bg.banner : COLOR.font.disabled} !important;
  color: ${COLOR.font.default};
  cursor: ${(props) => props.value && "pointer"};
  transition: all ease 0.25s;
`;

const BtnInActive = styled(Btn)`
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.62rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const CustomTooltip = style(({ className, ...props }: TooltipProps) => (
  <TooltipLib.default {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 13,
    fontFamily: "Pr-Bold",
    paddingTop: 8,
    paddingRight: 15,
    paddingBottom: 8,
    paddingLeft: 15,
  },
}));

const ChallengeSuggestionInput = () => {
  const { user } = useUser();
  const [value, onChangeValue, setValue] = useTextArea("");

  const handleSubmit = () => {
    if (value.trim()) {
      const data = {
        content: value.trim(),
      };
      addSuggestion(data);
      setValue("");
    }
  };

  const { mutate: addSuggestion } = useAddChallengeSuggestion();

  return (
    <ChallengeBanner title={script.title} width="100%" padding="2rem">
      <Textarea
        value={value}
        onChange={onChangeValue}
        width="100%"
        margin="1rem 0"
        text={script.text}
        minRow={6}
        maxLength={100}
      />
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        background={COLOR.bg.primary}
      >
        <FlexTextBox
          fontSize="1.25rem"
          fontFamily="Pr-Bold"
          color={COLOR.font.disabled}
          margin="0 0 0 1rem"
        >
          글자 수 {value.trim().length} / 100
        </FlexTextBox>
        <FlexBox position="relative" mobileWidth="fit-content">
          {user ? (
            <Btn value={value.trim()} onClick={handleSubmit}>
              제안하기
            </Btn>
          ) : (
            <CustomTooltip
              title={
                <div style={{ textAlign: "center" }}>
                  로그인 후에 <br /> 챌린지를 제안할 수 있어요
                </div>
              }
              arrow
              placement="top-start"
            >
              <BtnInActive>제안하기</BtnInActive>
            </CustomTooltip>
          )}
        </FlexBox>
      </FlexBox>
    </ChallengeBanner>
  );
};

export default ChallengeSuggestionInput;
