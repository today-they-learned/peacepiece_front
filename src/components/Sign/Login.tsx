import styled from "styled-components";
import useInput from "hooks/useInput";
import { useLogin } from "hooks/queries/auth";
import { Form, Grid, Icon } from "semantic-ui-react";
import { FlexBox, FlexTextBox } from "components/common";
import { Field, ErrorText } from "components/Form";
import { PrimaryBtn, SecondBtn } from "components/Form/Button";
import COLOR from "constants/color";
import { Link } from "react-router-dom";

const ResetPassword = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0;
  color: ${COLOR.font.primary};
  font-family: "Pr-Light";
  font-size: 14px;
  padding: 0;
  cursor: pointer;
`;

const Login = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const { mutate: login, isError } = useLogin();

  const handleSubmit = () => {
    login({
      email,
      password,
    });
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
          style={{ marginBottom: "2rem" }}
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
        {isError && (
          <ErrorText margin="1.5rem 0 0 0">
            이메일 또는 비밀번호를 다시 확인하세요.
          </ErrorText>
        )}
        <PrimaryBtn
          type="submit"
          fluid
          style={{ marginTop: isError ? "1rem" : "3rem" }}
        >
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
        <FlexTextBox color={COLOR.font.darkDefault}>
          <Link to="/terms">이용약관</Link>
        </FlexTextBox>
        <FlexTextBox margin="0 1rem" color={COLOR.font.darkDefault}>
          |
        </FlexTextBox>
        <FlexTextBox color={COLOR.font.darkDefault}>
          <Link to="/privacy">개인정보처리방침</Link>
        </FlexTextBox>
      </FlexBox>
    </Grid.Column>
  );
};

export default Login;
