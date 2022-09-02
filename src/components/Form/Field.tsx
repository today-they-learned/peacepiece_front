import styled from "styled-components";
import { Form } from "semantic-ui-react";

const Field = styled(Form.Field)`
  margin: 1rem 0 0.3rem 0 !important;
  font-family: "Pr-Light" !important;
  label::after {
    visibility: hidden;
  }
  input {
    font-family: "Pr-Light" !important;
  }
  input[type="email"] {
    font-family: "Pr-Light" !important;
  }
  input[type="password"] {
    ::placeholder {
      font-family: "Pr-Light" !important;
    }
  }
`;

export default Field;
