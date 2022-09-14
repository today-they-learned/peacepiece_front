import ServiceCarousel from "./ServiceCarousel";

const IslandCarousel = () => {
  const images = [
    `${process.env.PUBLIC_URL}/intro/island_1.png`,
    `${process.env.PUBLIC_URL}/intro/island_2.png`,
    `${process.env.PUBLIC_URL}/intro/island_3.png`,
    `${process.env.PUBLIC_URL}/intro/island_4.png`,
  ];

  return <ServiceCarousel category="island" images={images} />;
};

export default IslandCarousel;
