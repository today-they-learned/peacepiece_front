import React from "react";
import ModalFrame from "components/Modal/ModalFrame";
import COLOR from "constants/color";

const Island = () => {
  return (
    <div>
      <ModalFrame titleColor={COLOR.font.danger}>
        <div style={{ color: "white" }}>
          이것은 내용입니다. 블라블라 ~ 여기에 본문 내용을 ......{" "}
        </div>
      </ModalFrame>
    </div>
  );
};

export default Island;
