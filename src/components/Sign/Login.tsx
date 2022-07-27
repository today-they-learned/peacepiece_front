import React from "react";
import styled from "styled-components";
import { Form, Grid, Icon } from "semantic-ui-react";
import Field from "components/Form/Field";
import COLOR from "constants/color";
import { PrimaryBtn, SecondBtn } from "components/Form/Button";
import FlexBox from "components/common/FlexBox";
import useInput from "hooks/useInput";

const ResetPassword = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: ${COLOR.primary};
  font-family: "NS-B";
  font-size: 14px;
  padding: 0;
  cursor: pointer;
`;

const Login = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(email, password);
  };

  return (
    <Grid.Column centered>
      <Form onSubmit={handleSubmit} style={{ width: "24rem" }}>
        <Field
          fluid
          required
          type="email"
          icon="mail"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          control={Form.Input}
          iconPosition="left"
          value={email}
          onChange={onChangeEmail}
        />
        <div style={{ position: "relative" }}>
          <Field
            fluid
            required
            type="password"
            icon="lock"
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            control={Form.Input}
            iconPosition="left"
            value={password}
            onChange={onChangePassword}
          />
          <ResetPassword type="button">비밀번호를 잊으셨나요?</ResetPassword>
        </div>
        <PrimaryBtn type="submit" fluid style={{ marginTop: "3rem" }}>
          로그인
        </PrimaryBtn>
        <SecondBtn type="button" fluid>
          Google 계정으로 로그인하기
          <Icon
            name="angle right"
            style={{ position: "absolute", right: "1rem" }}
          />
        </SecondBtn>
      </Form>
      <FlexBox center margin="4rem 0 0 0">
        이용약관
        <div style={{ margin: "0 1rem" }}>|</div>
        개인정보처리방침
      </FlexBox>
    </Grid.Column>
  );
};

export default Login;
