import React from "react";
import styled from "styled-components";
import BaseContainer from "../../../containers/baseContainer";

import GlobalStatsImgSrc from "../../../assets/header/crypto-stats.svg";

import { maxWidth } from "../../../mediaQueries/mediaQueries";

import CardInfo from "./CardInfo/CardInfo";

const GlobalCryptoStatsWrapper = styled(BaseContainer)`
  margin-top: 70px;
  padding: 0 60px;
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;

  color: #ffffff;

  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  max-width: 750px;
`;

const CardsAndImageContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const GlobalStatsImage = styled.img`
  width: 100%;
  max-width: 700px;

  border-radius: 10px;
  opacity: 0.75;

  ${maxWidth.tablet} {
    display: none;
  }
`;

const GlobalCryptoStats: React.FC = () => {
  return (
    <GlobalCryptoStatsWrapper>
      <Title>Global crypto stats</Title>
      <CardsAndImageContainer>
        <CardsContainer>
          <CardInfo title="Active cryptos" subtitle="more than 9,631" />
          <CardInfo title="Common market cap" subtitle="$2,021TR" />
          <CardInfo title="Active markets" subtitle="more than 400" />
          <CardInfo title="Average total 24h volume" subtitle=" $56.09B" />
        </CardsContainer>
        <GlobalStatsImage src={GlobalStatsImgSrc} alt="crypto world" />
      </CardsAndImageContainer>
    </GlobalCryptoStatsWrapper>
  );
};

export default GlobalCryptoStats;
