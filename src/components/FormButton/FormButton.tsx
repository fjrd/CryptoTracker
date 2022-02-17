import React from "react";
import styled from "styled-components";

const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 10px;
  margin-top: 40px;

  height: 48px;
  border-radius: 16px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 36px;

  transition: all 0.5s;

  background-color: #7db59a;
  color: #ffffff;
  border: none;

  width: 100%;

  &:hover {
    cursor: pointer;

    background-color: #5b9479;
    border: none;
  }

  &:active,
  &:focus {
    transition: all 0s;
    cursor: pointer;

    background-color: #4f896c;
    font-weight: 600;

    border: none;
  }
`;

export default FormButton;
