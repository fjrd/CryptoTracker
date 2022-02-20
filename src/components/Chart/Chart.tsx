import React, { FC } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { chartTheme } from "./../../constants/chartTheme";

type MyProps = {
  name: string;
  data: number[][];
};

Highcharts.theme = chartTheme as any;

const StockChart: FC<MyProps> = ({ name, data }) => {
  const options = {
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: name,
    },
    series: [
      {
        type: "candlestick",
        data: data,
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
<<<<<<< HEAD
      containerProps={{
        style: { height: "80%", width: "80%" },
      }}
=======

      containerProps={{
        style: { height: "80%", width: "80%" },
      }}

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
    />
  );
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

export default StockChart;
