import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import BaseContainer from "../../../containers/baseContainer";

import GetStartedButton from "./GetStartedButton/GetStartedButton";

import { routes } from "../../../constants/routes";

const CompanyAboutShortWrapper = styled(BaseContainer)`
  margin: 0 auto;
  padding-top: 200px;
  width: 100%;
  max-width: 716px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 5.5rem;
  line-height: 82px;
  text-align: center;

  color: #ffffff;

  margin-bottom: 40px;
`;

const Subtitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  margin-bottom: 40px;
`;

const CompanyAboutShort: React.FC = () => {
  const history = useHistory();
  return (
    <CompanyAboutShortWrapper>
      <Title>World to learn, and buy and sell crypto easily</Title>
      <Subtitle>
        Here you can learn, and invest your favorite crypto assets and enjoy a
        very easy ecosystem Let’s get started
      </Subtitle>
      <GetStartedButton
        onClick={() => {
          history.push(routes.registration);
        }}
      >
        get started
      </GetStartedButton>
    </CompanyAboutShortWrapper>
  );
};
export default CompanyAboutShort;
