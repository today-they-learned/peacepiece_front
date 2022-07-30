import React, { useState } from "react";
import FlexBox from "components/common/FlexBox";
import TabBtn from "components/Tab/TabBtn";
import Login from "components/Sign/Login";
import Signup from "components/Sign/Signup";

const enum signTab {
  login = 0,
  signup = 1,
}

const Sign = () => {
  const [tab, setTab] = useState(signTab.login);

  return (
    <FlexBox width="100vw" center>
      <FlexBox
        column
        shadow
        width="30rem"
        margin="10rem 0 0 0"
        borderRadius="1rem"
      >
        <FlexBox width="100%">
          <TabBtn tab={signTab.login} curTab={tab} setTab={setTab}>
            로그인
          </TabBtn>
          <TabBtn tab={signTab.signup} curTab={tab} setTab={setTab}>
            회원가입
          </TabBtn>
        </FlexBox>
        <FlexBox width="100%" margin="2.5rem 0" center>
          {tab === signTab.login ? <Login /> : <Signup />}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Sign;
