import styled from "styled-components";
import { Button } from "antd";

import { buttonBaseStyles } from "../../../../constants/constants";

const GetStartedButton = styled(Button)`
  ${buttonBaseStyles}

  width: 200px;
  height: 40px;

  background: #f6764d;
  border: 1px solid #f6764d;
  border-radius: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 21px;

  text-align: center;

  color: #ffffff;

  &:hover,
  :active,
  :focus {
    color: #f6764d;
    background: none;
    border: 1px solid #f6764d;
  }
`;

export default GetStartedButton;
