import React from "react";
import HoverTooltip from "components/Tooltip/Tooltip";

const Island = () => {
  return (
    <div style={{ height: "60rem" }}>
      <HoverTooltip
        text="챌린지 인증을 하면 PP 포인트를 받을 수 있어요! 😎"
        width="15rem"
      />
    </div>
  );
};

export default Island;
