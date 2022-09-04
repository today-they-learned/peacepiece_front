/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
  curTab: number;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
const TabBtn = ({ children, curTab, tab, setTab }: Props) => {
  return (
    <button
      css={css`
        width: 50%;
        height: 3.5rem;
        font-family: "Pr-SemiBold";
        color: ${curTab === tab ? COLOR.font.primary : COLOR.font.secondary};
        border-radius: ${tab ? "0 1rem 0 0" : "1rem 0 0 0"};
        background: ${curTab === tab ? "white" : COLOR.bg.secondary};
      `}
      onClick={() => setTab(tab)}
    >
      {children}
    </button>
  );
};

export default TabBtn;
