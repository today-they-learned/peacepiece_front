import COLOR from "constants/color";
import styled from "styled-components";
import ChallengeCarousel from "components/ServiceIntro/ChallengeCarousel";
import MaxWidthLayout from "layouts/maxWidth.layout";
import FAQAccordion from "components/ServiceIntro/FAQAccordion";

const ServiceIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroImageContainer = styled.div`
  position: relative;
`;

const IntroImage = styled.img`
  width: 100vw;
  margin-top: -2rem;
  height: 30rem;
  object-fit: cover;
  filter: brightness(80%);

  @media only screen and (max-width: 767px) {
    margin-top: 0rem;
  }
`;

const IntroTitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const IntroTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: ${COLOR.white};
  text-align: center;

  @media only screen and (max-width: 767px) {
    font-size: 2rem;
  }
`;

const IntroSubTitle = styled.h2`
  font-size: 1rem;
  color: ${COLOR.font.info};
  text-align: center;
  margin: 0;

  @media only screen and (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const ServiceDescriptionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-bottom: 5rem;
`;

const ServiceDescriptionContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  width: 100%;
  justify-content: space-around;
  padding: 4rem;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceDescriptionTitle = styled.h1`
  font-size: 1.5rem;
  color: ${COLOR.white};
  margin: 0;
  padding: 0 0 1rem 0;
`;

const ServiceDescriptionSubTitle = styled.h3`
  font-size: 1rem;
  color: ${COLOR.font.primary};
  margin: 0;
  padding: 0 0 0.2rem 0;
`;

const ServiceDescriptionContent = styled.p`
  font-size: 1rem;
  color: ${COLOR.font.secondary};
`;

const ServiceDescriptionTypoContainer = styled.div`
  flex: 1 1 50%;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem;

  @media only screen and (max-width: 767px) {
    flex: 1 1 100%;
    padding: 2rem;
  }
`;

const ServiceIntro = () => {
  return (
    <ServiceIntroContainer>
      <IntroImageContainer>
        <IntroImage
          src={`${process.env.PUBLIC_URL}/service-intro-bg.jpg`}
          alt=""
        />
        <IntroTitleContainer>
          <IntroTitle>PeacePiece</IntroTitle>
          <IntroSubTitle>
            실생활 속 사소한 행동으로 환경을 지킬 수 있어요
          </IntroSubTitle>
        </IntroTitleContainer>
      </IntroImageContainer>
      <MaxWidthLayout maxWidth="1300px" padding="0">
        <ServiceDescriptionListContainer>
          <ServiceDescriptionContainer reverse={false}>
            <ServiceDescriptionTypoContainer>
              <ServiceDescriptionSubTitle>
                일상 생활 속 사소한 행동으로
              </ServiceDescriptionSubTitle>
              <ServiceDescriptionTitle> 챌린지 </ServiceDescriptionTitle>
              <ServiceDescriptionContent>
                일상 생활 속 주제로 열리는 일일 / 주간 챌린지에 참여하고, <br />
                포인트를 받을 수 있어요. 만약 원하는 챌린지가 있다면, <br />
                직접 제안할 수 있어요.
              </ServiceDescriptionContent>
            </ServiceDescriptionTypoContainer>
            <ChallengeCarousel />
          </ServiceDescriptionContainer>
          <ServiceDescriptionContainer reverse>
            <ServiceDescriptionTypoContainer>
              <ServiceDescriptionSubTitle>
                환경을 사랑하는 여러분의 일상, 공유해주세요.
              </ServiceDescriptionSubTitle>
              <ServiceDescriptionTitle> 피스 </ServiceDescriptionTitle>
              <ServiceDescriptionContent>
                피스는 환경 활동 SNS 커뮤니티에요. 다양한 환경 운동 글을
                작성하고, 공유해주세요! 여러분의 환경을 생각하는 마음을 다른
                SNS에도 공유할 수도 있어요!
              </ServiceDescriptionContent>
            </ServiceDescriptionTypoContainer>
            <ChallengeCarousel />
          </ServiceDescriptionContainer>
          <ServiceDescriptionContainer reverse={false}>
            <ServiceDescriptionTypoContainer>
              <ServiceDescriptionSubTitle>
                환경 활동으로 나의 섬을 꾸며보세요
              </ServiceDescriptionSubTitle>
              <ServiceDescriptionTitle> 나의 섬 </ServiceDescriptionTitle>
              <ServiceDescriptionContent>
                챌린지 / 피스에서 활동을 하며 받은 포인트로 섬을 꾸밀 수 있는
                아이템을 구매하거나 동물을 입양할 수 있어요. 그리고 섬을 점차
                넓혀 나가 구매할 수 있는 아이템의 개수도 넓혀나가 보세요!
              </ServiceDescriptionContent>
            </ServiceDescriptionTypoContainer>
            <ChallengeCarousel />
          </ServiceDescriptionContainer>

          <FAQContainer>
            <ServiceDescriptionSubTitle>FAQ</ServiceDescriptionSubTitle>
            <ServiceDescriptionTitle>자주 묻는 질문</ServiceDescriptionTitle>
            <FAQAccordion />
          </FAQContainer>
        </ServiceDescriptionListContainer>
      </MaxWidthLayout>
    </ServiceIntroContainer>
  );
};

export default ServiceIntro;
