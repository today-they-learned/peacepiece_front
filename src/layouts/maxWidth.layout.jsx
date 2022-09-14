import styled from "styled-components";

const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "1300px"};
  padding: ${(props) => props.padding || "0 1rem"};
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MaxWidthLayout = ({ children, maxWidth, padding }) => {
  return (
    <Container maxWidth={maxWidth} padding={padding}>
      {children}
    </Container>
  );
};

export default MaxWidthLayout;
