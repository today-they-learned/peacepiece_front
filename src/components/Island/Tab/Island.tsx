import COLOR from "constants/color";
import { FlexBox, FlexTextBox, FlexButton } from "components/common";
import styled from "styled-components";
import { BuyableItemType } from "types";

interface Props {
  islandData: BuyableItemType[];
}

const Img = styled.img`
  width: 65px;
  height: 65px;
  margin: 0.75rem 0.25rem 0.75rem 0.75rem;
  border-radius: 5px;
`;

const Island = ({ islandData }: Props) => {
  return (
    <FlexBox column margin="0 0 0.5rem 0">
      <FlexTextBox fontSize="1.2rem" margin="0.2rem 0 0.9rem 0.5rem">
        <h3>🍃 섬 넓히기</h3>
      </FlexTextBox>
      {islandData?.map((islandDatum) => {
        return (
          <FlexBox
            key={`island-item-${islandDatum.id}`}
            background={COLOR.bg.navSecondary}
            borderRadius="5px"
            width="100%"
          >
            <Img src={islandDatum?.thumbnail?.file} />
            <FlexBox
              background="transparent"
              column
              padding="0.7rem 0.7rem 0.7rem 0.3rem"
            >
              <FlexBox background="transparent" padding="0 0 0.4rem 0" column>
                <FlexTextBox fontSize="1rem">{islandDatum.name}</FlexTextBox>
                <FlexTextBox fontSize="rem" color={COLOR.font.primary}>
                  {islandDatum.point} PP
                </FlexTextBox>
              </FlexBox>
              {islandDatum?.buyable_context?.reason === 2 && (
                <FlexButton
                  backgroundColor="#3F7D4D"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  구매 완료
                </FlexButton>
              )}
              {islandDatum?.buyable_context?.buyable && (
                <FlexButton
                  backgroundColor={COLOR.font.primary}
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {islandDatum.point} PP로 구매하기
                </FlexButton>
              )}
              {islandDatum?.buyable_context?.reason === 1 && (
                <FlexButton
                  backgroundColor="#8F3C3C"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {islandDatum?.buyable_context?.pre_condition?.item?.name}{" "}
                  {islandDatum?.buyable_context?.pre_condition?.max_count}
                  {islandDatum?.buyable_context?.pre_condition?.item
                    ?.category === "animal"
                    ? "마리 입양 "
                    : "개 구매 "}
                  후에 잠금 해제
                </FlexButton>
              )}
              {islandDatum?.buyable_context?.reason === 3 && (
                <FlexButton
                  backgroundColor="#8F3C3C"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {islandDatum?.buyable_context?.lack_point} PP 부족
                </FlexButton>
              )}
            </FlexBox>
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};

export default Island;
