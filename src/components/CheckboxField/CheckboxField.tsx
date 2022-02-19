import React from "react";
import styled from "styled-components";

import { Checkbox } from "antd";
import { Form } from "antd";
import { CheckboxFieldTypes } from "../../types/types";

const StyledCheckbox = styled.div`
  width: 100%;
  float: left;
  label {
    text-transform: none;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1.16rem;
    line-height: 17px;

    color: darkgray;
  }
`;

const StyledFormItem = styled(Form.Item)`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 32px;
  width: 100%;

  .ant-form-item-control {
    margin: 0;
  }
`;

const CheckboxField: React.FC<CheckboxFieldTypes> = ({
  name,
  valuePropName,
  wrapperCol,
  text,
}) => {
  return (
    <StyledFormItem
      name={name}
      valuePropName={valuePropName}
      wrapperCol={wrapperCol}
    >
      <StyledCheckbox>
        <Checkbox>{text}</Checkbox>
      </StyledCheckbox>
    </StyledFormItem>
  );
};

export default CheckboxField;
