
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import actionGetCryptoCandleRange from "../../redux/actions/actionGetCryptoCandleRange";

import Chart from "../../components/Chart/Chart";

import { chartData } from "../../constants/stockData";
import { getChartData } from "../../redux/selectors/selectors";

const ChartPageContainer = styled.div`
  height: 100vh;


  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;


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
