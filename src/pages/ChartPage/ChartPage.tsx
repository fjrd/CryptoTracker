<<<<<<< HEAD
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

<<<<<<< HEAD
import actionGetCoinChartInfo from "../../redux/actions/actionGetCoinChartInfo";

import ButtonElement from "../../components/ButtonElement/ButtonElement ";
import { routes } from "../../constants/routes";
=======
import actionGetCryptoCandleRange from "../../redux/actions/actionGetCryptoCandleRange";
>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

import Chart from "../../components/Chart/Chart";

import { chartData } from "../../constants/stockData";
<<<<<<< HEAD
import {
  getChartData,
  getCurrentCryptoId,
} from "../../redux/selectors/selectors";
import { useHistory } from "react-router";
=======
import { getChartData } from "../../redux/selectors/selectors";
>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

const ChartPageContainer = styled.div`
  height: 100vh;

<<<<<<< HEAD
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: inherit;

<<<<<<< HEAD
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
=======

  background-color: inherit;

  margin-top: 110px;
`;

const ChartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(getChartData);

  useEffect(() => {
    dispatch(actionGetCryptoCandleRange("BTC", "19-02-2022", "21-02-2022"));
  }, []);
  return (
    <ChartPageContainer>
      <Chart name="bitoc" data={data} />

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
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
