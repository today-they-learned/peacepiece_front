import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
`;

const MaxWidthLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MaxWidthLayout;
