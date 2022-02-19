import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import closeFormSrc from "../../assets/form/close-form.png";
import BaseContainer from "../../containers/baseContainer";

import { redirectToMainPage } from "../../utils/helperFunctions";

const FormTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;

  text-transform: capitalize;

  color: #e7e7e7;
`;

const CloseForm = styled.img`
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transform: rotate(120deg);
  }
`;

const FormHeaderWrapper = styled(BaseContainer)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;

  margin-bottom: 55px;
`;

const FormHeader: React.FC<{ title: string }> = ({ title }) => {
  const history = useHistory();
  return (
    <FormHeaderWrapper>
      <FormTitle>{title}</FormTitle>
      <CloseForm
        onClick={() => {
          redirectToMainPage(history);
        }}
        src={closeFormSrc}
        alt="close"
      />
    </FormHeaderWrapper>
  );
};

export default FormHeader;
