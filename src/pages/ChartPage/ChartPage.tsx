import React from "react";
import styled from "styled-components";

import Chart from "../../components/Chart/Chart";

import { chartData } from "../../constants/stockData";

const ChartPageContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1c1c1c;
`;

const ChartPage = () => {
  return (
    <ChartPageContainer>
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
