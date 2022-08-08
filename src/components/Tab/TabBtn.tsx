import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
  curTab: number;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
const TabBtn = ({ children, curTab, tab, setTab }: Props) => {
  const Btn = styled.button`
    width: 50%;
    height: 3.5rem;
    font-family: "NS-B";
    color: ${curTab === tab ? COLOR.font.primary : COLOR.font.secondary};
    border-radius: ${tab ? "0 1rem 0 0" : "1rem 0 0 0"};
    background: ${curTab === tab ? "white" : COLOR.font.secondary};
  `;

  return <Btn onClick={() => setTab(tab)}>{children}</Btn>;
};

export default TabBtn;
