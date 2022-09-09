import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "1200px"};
  padding: ${(props) => props.padding || "0 1rem"};
  width: 100%;
`;

const MaxWidthLayout = ({ children, maxWidth, padding }) => {
  return (
    <Container maxWidth={maxWidth} padding={padding}>
      {children}
    </Container>
  );
};

export default MaxWidthLayout;
