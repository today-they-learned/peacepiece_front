import styled from "styled-components";
import { Form } from "semantic-ui-react";

const Field = styled(Form.Field)`
  margin-bottom: 2rem !important;
  font-family: "NS-R" !important;
  label::after {
    visibility: hidden;
  }
  input {
    font-family: "NS-R" !important;
  }
  input[type="email"] {
    font-family: "NS-R" !important;
  }
  input[type="password"] {
    ::placeholder {
      font-family: "NS-R" !important;
    }
  }
`;

export default Field;
