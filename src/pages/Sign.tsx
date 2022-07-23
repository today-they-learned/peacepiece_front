import React, { useState } from "react";
import FlexBox from "components/common/FlexBox";
import TabBtn from "components/Tab/TabBtn";
import Login from "components/Sign/Login";
import Signup from "components/Sign/Signup";

const Sign = () => {
  const [tab, setTab] = useState(1); // 0: Signup  1:Login

  return (
    <FlexBox width="100vw" center>
      <FlexBox
        column
        shadow
        width="33rem"
        margin="10rem 0 0 0"
        borderRadius="1rem"
      >
        <FlexBox width="100%">
          <TabBtn tab={1} isOnTab={tab === 1} setTab={setTab}>
            로그인
          </TabBtn>
          <TabBtn tab={0} isOnTab={tab === 0} setTab={setTab}>
            회원가입
          </TabBtn>
        </FlexBox>
        {tab ? <Login /> : <Signup />}
      </FlexBox>
    </FlexBox>
  );
};

export default Sign;
