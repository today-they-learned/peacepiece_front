/* eslint-disable react/require-default-props */
import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  font-size: 20px;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: white;
  border: none;
  outline: none;
  background: black;
  transition: 200ms ease-in-out;

  &:before {
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
  }
`;

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = ({ onClick }: NextArrowProps) => {
  return <Arrow onClick={onClick}>누르면 넘어감</Arrow>;
};
export default NextArrow;
