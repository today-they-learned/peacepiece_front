import { Button } from "semantic-ui-react";
import COLOR from "constants/color";
import styled from "styled-components";

export const PrimaryBtn = styled(Button)`
  height: 2.8rem !important;
  font-family: "Pr-SemiBold" !important;
  color: white !important;
  background: ${COLOR.font.primary} !important;
  margin-bottom: 1rem !important;
`;

export const SecondBtn = styled(Button)`
  height: 2.8rem !important;
  color: ${COLOR.font.secondary} !important;
  background: white !important;
  border: 1px solid #d9d9d9 !important;
  font-family: "Pr-SemiBold" !important;
  margin-bottom: 1rem !important;
`;
