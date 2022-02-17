import React from "react";
import styled from "styled-components";

import Header from "../../components/Header/Header";
import CompanyAboutShort from "./CompanyAboutShort/CompanyAboutShort";
import GlobalCryptoStats from "./GlobalCryptoStats/GlobalCryptoStats";

import CoinList from "../../components/CoinList/CoinList";

const MainPageContainer = styled.div`
  background-color: #000000;
`;

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <Header />
      <CompanyAboutShort />
      <GlobalCryptoStats />
      <CoinList />
    </MainPageContainer>
  );
};

export default MainPage;
