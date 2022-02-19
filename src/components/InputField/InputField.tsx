import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { Input, Form } from "antd";

import { InputFieldTypes } from "../../types/types";

const placeholderStyles = css`
  font-family: Inter;
  font-size: 1.5rem;
  line-height: 32px;

  color: #2d3436;
`;

// customizing antd FormItem styles
const StyledFormItem = styled(Form.Item)`
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
  input {
    &:disabled {
      &::placeholder {
        color: #adadad;
      }
    }
    &::placeholder {
      ${placeholderStyles};
    }
  }
`;

const InputElement = styled(Input)<{
  $paddingLeft?: string;
  $paddingRight?: string;
}>`
  height: 48px;
  width: 100%;
  border-radius: 16px;
  border: none;
  background: #f0f0f0;
  font-size: 1.5rem;

  & input {
    background: inherit;
    border-radius: inherit;
  }
`;

const InputField: React.FC<InputFieldTypes> = (
  { label, name, rules, placeholder, suffix, disabled, type },
  props
) => {
  const { paddingLeft, paddingRight } = props;

  return (
    <StyledFormItem label={label} name={name} rules={rules}>
      <InputElement
        placeholder={placeholder}
        suffix={suffix}
        disabled={disabled}
        type={type}
        $paddingLeft={paddingLeft}
        $paddingRight={paddingRight}
      />
    </StyledFormItem>
  );
};

export default InputField;
