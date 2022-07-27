import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
  isOnTab: boolean;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
const TabBtn = ({ children, isOnTab, tab, setTab }: Props) => {
  const Btn = styled.button`
    width: 50%;
    height: 3.5rem;
    font-family: "NS-B";
    color: ${isOnTab ? COLOR.primary : COLOR.gray};
    border-radius: ${tab ? "0 1rem 0 0" : "1rem 0 0 0"};
    background: ${isOnTab ? "white" : COLOR.lightgray};
  `;

  return <Btn onClick={() => setTab(tab)}>{children}</Btn>;
};

export default TabBtn;
