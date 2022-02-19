import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

import { Button } from "antd";
import { buttonBaseStyles } from "../../../constants/constants";

import { ButtonTypes } from "../../../types/types";

import { routes } from "../../../constants/routes";

const SignUp = styled(Button)`
  ${buttonBaseStyles}

  background-color: #4D54F6;
  border: 1px solid #4d54f6;
  color: white;
  transition: all 0.5s;

  &:hover,
  :active,
  :focus {
    color: #4d54f6;
    background-color: inherit;
    border: 1px solid #4d54f6;
  }
`;

const RegButton: React.FC<ButtonTypes> = ({ text }) => {
  const history = useHistory();
  return (
    <SignUp
      onClick={() => {
        history.push(routes.registration);
      }}
    >
      {text}
    </SignUp>
  );
};

export default RegButton;
