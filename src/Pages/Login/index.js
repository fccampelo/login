import React from "react";
import image from "../../image/image2.png";
import { connect } from "react-redux";

//Components Globais
import { ButtonLogin } from "../../Components/Layout/Button";
import { InputField } from "../../Components/Input";

//Components Login
import {
  LoginCardFooter,
  LoginCard,
  Container,
  Title,
  SubTitle,
  RememberAndForgerPassWord
} from "./Components/";

let msg =
  "Don't have an account ? Create your account, it takes less then a minute";

const Login = ({ validatePassword }) => (
  <LoginCard>
    <Container>
      <Title> Login </Title>
      <SubTitle> {msg} </SubTitle>
      <InputField
        placeholder="Username"
        icon={"fa fa-user"}
        validateField={e => validatePassword(e.target.value)}
      />
      <InputField
        placeholder="Password"
        type="password"
        icon={"fa fa-unlock-alt"}
      />
      <RememberAndForgerPassWord />
      <ButtonLogin>Login</ButtonLogin>
      <LoginCardFooter />
    </Container>
    <Container image={`url(${image})`}> teste </Container>
  </LoginCard>
);

const mapState = state => {
  console.log(state);
  return {
    count: state.count
  };
};

const mapDispatch = ({ Login: { validatePassword } }) => ({
  validatePassword
});

export default connect(
  mapState,
  mapDispatch
)(Login);
