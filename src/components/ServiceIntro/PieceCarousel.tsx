import ServiceCarousel from "./ServiceCarousel";

const PieceCarousel = () => {
  const images = [
    `${process.env.PUBLIC_URL}/intro/piece_1.png`,
    `${process.env.PUBLIC_URL}/intro/piece_2.png`,
    `${process.env.PUBLIC_URL}/intro/piece_3.png`,
    `${process.env.PUBLIC_URL}/intro/piece_4.png`,
    `${process.env.PUBLIC_URL}/intro/piece_5.png`,
  ];

  return <ServiceCarousel category="challenge" images={images} />;
};

export default PieceCarousel;
