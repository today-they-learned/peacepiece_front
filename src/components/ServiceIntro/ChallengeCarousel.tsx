import ServiceCarousel from "./ServiceCarousel";

const ChallengeCarousel = () => {
  const images = [
    `${process.env.PUBLIC_URL}/intro/challenge_list.png`,
    `${process.env.PUBLIC_URL}/intro/participate_challenge_1.png`,
    `${process.env.PUBLIC_URL}/intro/participate_challenge_2.png`,
    `${process.env.PUBLIC_URL}/intro/participate_challenge_3.png`,
    `${process.env.PUBLIC_URL}/intro/challenge_suggestion.png`,
  ];

  return <ServiceCarousel category="challenge" images={images} />;
};

export default ChallengeCarousel;
