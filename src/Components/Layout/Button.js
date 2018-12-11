import styled from "@emotion/styled";

const Button = styled.button`
  border-radius: 25px;
  box-shadow: 0px 6px 18px rgba(0, 126, 255, 0.5);
  border: none;
  font-size: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  font-family: "Montserrat";
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;

export const ButtonLogin = styled(Button)`
  width: 140px;
  height: 50px;
  background-color: #1768d5;
  display: block;
`;

export const SocalLogin = styled(Button)`
  width: 70px;
  height: 32px;
  border-radius: 15px;
  background-color: ${props => (props.color ? props.color : "")};
  margin: 0 15px;
`;
