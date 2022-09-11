import COLOR from "constants/color";
import { FlexBox, FlexTextBox, FlexButton } from "components/common";
import styled from "styled-components";
import { BuyableItemType } from "types";

interface Props {
  animalData: BuyableItemType[];
}

const Img = styled.img`
  width: 70px;
  height: 70px;
  margin: 0.75rem 0.25rem 0.75rem 0.75rem;
  border-radius: 5px;
`;

const Animal = ({ animalData }: Props) => {
  return (
    <FlexBox background="transparent" column margin="0 0 0.5rem 0">
      <FlexTextBox fontSize="1.2rem" margin="0.2rem 0 0.9rem 0.5rem">
        <h3>🐥 동물 입양하기</h3>
      </FlexTextBox>
      {animalData?.map((animalDatum) => {
        return (
          <FlexBox
            key={`animal-item-${animalDatum.id}`}
            width="100%"
            background={COLOR.bg.navSecondary}
            borderRadius="5px"
          >
            <Img src={animalDatum?.thumbnail?.file} />
            <FlexBox
              background="transparent"
              column
              padding="0.7rem 0.7rem 0.7rem 0.3rem"
            >
              <FlexBox background="transparent" margin="0 0 0.4rem 0" column>
                <FlexTextBox fontSize="1rem">{animalDatum?.name}</FlexTextBox>
                <FlexTextBox fontSize="1rem" color={COLOR.font.primary}>
                  {animalDatum.point} PP
                </FlexTextBox>
              </FlexBox>
              {animalDatum?.buyable_context?.reason === 2 && (
                <FlexButton
                  backgroundColor="#3F7D4D"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  입양 완료
                </FlexButton>
              )}
              {animalDatum?.buyable_context?.buyable && (
                <FlexButton
                  backgroundColor={COLOR.font.primary}
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {animalDatum.point} PP로 입양하기
                </FlexButton>
              )}
              {animalDatum?.buyable_context?.reason === 1 && (
                <FlexButton
                  backgroundColor="#8F3C3C"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {animalDatum?.buyable_context?.pre_condition?.item?.name}{" "}
                  {animalDatum?.buyable_context?.pre_condition?.max_count}
                  {animalDatum?.buyable_context?.pre_condition?.item
                    ?.category === "animal"
                    ? "마리 입양 "
                    : "개 구매 "}
                  후에 잠금 해제
                </FlexButton>
              )}
              {animalDatum?.buyable_context?.reason === 3 && (
                <FlexButton
                  backgroundColor="#8F3C3C"
                  fontSize="0.9rem"
                  padding="0.4rem 1.2rem"
                  borderRadius="0.3rem"
                >
                  {animalDatum?.buyable_context?.lack_point} PP 부족
                </FlexButton>
              )}
            </FlexBox>
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};

export default Animal;
