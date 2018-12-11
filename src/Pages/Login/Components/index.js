import React from "react";
import styled from "@emotion/styled";

//Components Gobais
import { SocalLogin } from "../../../Components/Layout/Button";

export const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
`;

export const LoginOptionsMsg = styled.span`
  display: block;
  font-size: 16px;
  color: #606060;
  font-family: "Roboto";
  text-align: center;
`;

export const LoginCard = styled.div`
  width: 85%;
  height: 600px;
  border-radius: 4px;
  box-shadow: 0px 10px 150px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
`;

export const Container = styled.section`
  color: #000;
  width: 50%;
  background: ${props => (props.image ? props.image : "#fff")};
  background-size: 100%;
  padding: 40px;
`;

export const Title = styled.span`
  font-size: 36px;
  letter-spacing: 2px;
  color: #444444;
  font-family: "Montserrat";
  font-weight: bold;
  display: block;
  line-height: 50px;
  height: 75px;
`;

export const SubTitle = styled.span`
  width: 392px;
  height: 54px;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 24px;
  color: #606060;
  font-family: "Roboto";
  display: block;
`;

const RememberAndForgerPassWordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto;
`;

const ForgetPassword = styled.span`
  font-size: 15px;
  letter-spacing: 0px;
  color: #808080;
  font-family: "Roboto";
  cursor: pointer;
`;

const Remember = styled.span`
  font-size: 15px;
  letter-spacing: 0px;
  color: #808080;
  font-family: "Roboto";
`;

export const RememberAndForgerPassWord = () => (
  <RememberAndForgerPassWordWrapper>
    <div>
      <input type="checkbox" /> <Remember> Remember me </Remember>
    </div>
    <ForgetPassword> Forget Password? </ForgetPassword>
  </RememberAndForgerPassWordWrapper>
);

export const LoginCardFooter = () => (
  <SocialLoginWrapper>
    <LoginOptionsMsg> Or Login with </LoginOptionsMsg>
    <div>
      <SocalLogin color={"#1253ab"}>
        <i className="fa fa-facebook-f" />
      </SocalLogin>
      <SocalLogin color={"#0aaafd"}>
        <i className="fa fa-twitter" />
      </SocalLogin>
      <SocalLogin color={"#f65b5b"}>
        <i className="fa fa-google" />
      </SocalLogin>
    </div>
  </SocialLoginWrapper>
);
