import styled from "styled-components";
import COLOR from "constants/color";
import { Form } from "semantic-ui-react";

interface Props {
  text: string;
  width?: string;
  height?: string;
}

const defaultProps = {
  width: "45rem",
  height: "4.5rem",
};

const FlexInput = (props: Props) => {
  const { text, width, height } = props;

  const FormLib = styled(Form)`
    width: ${width} !important;
  `;

  const Input = styled.input`
    width: ${width} !important;
    height: ${height} !important;
    border-radius: 1.25rem !important;
    font-size: 1.25rem !important;
    font-family: "Pr-Bold" !important;
    color: white !important;
    background-color: ${COLOR.bg.secondary} !important;
  `;

  return (
    <FormLib>
      <Form.Field>
        <Input placeholder={text} />
      </Form.Field>
    </FormLib>
  );
};
FlexInput.defaultProps = defaultProps;

export default FlexInput;
