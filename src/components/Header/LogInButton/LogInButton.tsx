import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { Button } from "antd";
import { buttonBaseStyles } from "../../../constants/constants";

import { ButtonTypes } from "../../../types/types";

import { routes } from "../../../constants/routes";

const LogIn = styled(Button)`
  ${buttonBaseStyles}

  margin-right: 30px;

  border: 1px solid #ff5c28;
  color: #ff5c28;
  background-color: inherit;
  transition: all 0.5s;

  &:hover,
  :active,
  :focus {
    color: white;
    background-color: #ff7b4f;
    border: none;
  }
`;

const LogInButton: React.FC<ButtonTypes> = ({ text }) => {
  const history = useHistory();
  return (
    <LogIn
      onClick={() => {
        history.push(routes.login);
      }}
    >
      {text}
    </LogIn>
  );
};

export default LogInButton;
