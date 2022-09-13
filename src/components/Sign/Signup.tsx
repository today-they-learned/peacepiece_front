import { useState } from "react";
import useInput from "hooks/useInput";
import { useSignUp } from "hooks/queries/auth";
import { FlexBox } from "components/common";
import { Field, ErrorText } from "components/Form";
import { PrimaryBtn } from "components/Form/Button";
import { Form, Grid } from "semantic-ui-react";

const Signup = () => {
  const [username, onChangeUsername] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password1, onChangePassword1] = useInput("");
  const [password2, onChangePassword2] = useInput("");
  const [errMsg, setErrMsg] = useState({
    username: null,
    email: null,
    password1: null,
    password2: null,
  });

  const { mutate: signUp } = useSignUp(setErrMsg);

  const handleSubmit = () => {
    signUp({
      username,
      email,
      password1,
      password2,
    });
  };

  return (
    <Grid.Column centered>
      <Form onSubmit={handleSubmit} style={{ width: "24rem" }}>
        <Field
          fluid
          required
          icon="user"
          placeholder="닉네임"
          control={Form.Input}
          iconPosition="left"
          value={username}
          onChange={onChangeUsername}
        />
        {errMsg.username && <ErrorText>{errMsg.username}</ErrorText>}
        <Field
          fluid
          required
          type="email"
          icon="mail"
          placeholder="이메일"
          control={Form.Input}
          iconPosition="left"
          value={email}
          onChange={onChangeEmail}
        />
        {errMsg.email && <ErrorText>{errMsg.email}</ErrorText>}

        <Field
          fluid
          required
          type="password"
          icon="lock"
          placeholder="비밀번호"
          control={Form.Input}
          iconPosition="left"
          value={password1}
          onChange={onChangePassword1}
        />
        {errMsg.password1 && <ErrorText>{errMsg.password1}</ErrorText>}

        <Field
          fluid
          required
          type="password"
          icon="lock"
          placeholder="비밀번호 확인"
          control={Form.Input}
          iconPosition="left"
          value={password2}
          onChange={onChangePassword2}
        />
        {errMsg.password2 && <ErrorText>{errMsg.password2}</ErrorText>}

        <PrimaryBtn type="submit" fluid style={{ marginTop: "3rem" }}>
          회원가입
        </PrimaryBtn>
        {/* <SecondBtn type="button" fluid>
          Google 계정으로 가입하기
          <Icon
            name="angle right"
            style={{ position: "absolute", right: "1rem" }}
          />
        </SecondBtn> */}
      </Form>
      <FlexBox center margin="4rem 0 0 0">
        이용약관
        <div style={{ margin: "0 1rem" }}>|</div>
        개인정보처리방침
      </FlexBox>
    </Grid.Column>
  );
};

export default Signup;
