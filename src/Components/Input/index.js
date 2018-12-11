import React from "react";
import styled from "@emotion/styled";

const InputWrapper = styled.div`
  position: relative;
  margin: 50px 0;
`;

const Input = styled.input`
  font-size: 18px;
  letter-spacing: 0px;
  color: #606060;
  font-family: "Roboto";
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  padding-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #0aaafd;
  }
`;

const Icon = styled.i`
  position: absolute;
  right: 0px;
  color: #606060;
`;

export const InputField = ({ placeholder, icon, type, validateField }) => (
  <InputWrapper>
    <Input
      placeholder={placeholder}
      type={type ? type : "text"}
      onChange={validateField}
    />
    <Icon className={icon} />
  </InputWrapper>
);
