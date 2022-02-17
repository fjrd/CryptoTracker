import React from "react";
import styled from "styled-components";

import { Button } from "antd";

const ButtonElement  = styled(Button)`
  width: 100px;
  height: 40px;

  text-transform: capitalize;

  border: 1px solid black;
  border-radius: 20px;

  font-size: 1.5rem;
  font-family: "Roboto";
`;

export default ButtonElement ;
