import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import actionGetCoinChartInfo from "../../redux/actions/actionGetCoinChartInfo";

import ButtonElement from "../../components/ButtonElement/ButtonElement ";
import { routes } from "../../constants/routes";

import Chart from "../../components/Chart/Chart";

import { chartData } from "../../constants/stockData";
import {
  getChartData,
  getCurrentCryptoId,
} from "../../redux/selectors/selectors";
import { useHistory } from "react-router";

const ChartPageContainer = styled.div`
  height: 100vh;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: inherit;

  margin-top: 110px;
`;

const BackButton = styled(ButtonElement)`
  margin-bottom: 30px;
`;

const ChartPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector(getChartData);
  const currentCryptoId = useSelector(getCurrentCryptoId);

  useEffect(() => {
    dispatch(actionGetCoinChartInfo(currentCryptoId as string));
  }, []);
  return (
    <ChartPageContainer>
      <BackButton
        onClick={() => {
          history.push(routes.profile);
        }}
      >
        Назад
      </BackButton>
      <Chart name="bitoc" data={chartData} />
    </ChartPageContainer>
  );
};

export default ChartPage;

/*
[
  1582122600000, начальная дата(с какого периода начинать отслеживать)
   80, //начальная цена (свеча открыта)
   81.14, //наивысшая цена (в рамках свечки)
   80, //наименьшая цена  (в рамках свечки)
   80.9 //конечная цена (свеча закрыта)
]


*/
