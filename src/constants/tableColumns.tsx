import React from "react";
import styled from "styled-components";

import { createBrowserHistory } from "history";

import { fixLongPrice } from "../utils/helperFunctions";

import NoActiveSrc from "../assets/table/star-not-active.png";
import ActiveSrc from "../assets/table/star-active.png";

import ColumnFavorite from "../components/ColumnFavorite/ColumnFavorite";
import OpenCoinInfo from "../components/OpenCoinInfo/OpenCoinInfo";

const starIconSrc = {
  src: NoActiveSrc,
};

const BaseCellFont = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 21px;

  color: white;
`;

const CoinName = styled(BaseCellFont)`
  font-size: 2rem;
  font-weight: 700;
`;

const PriceChange24h = styled(BaseCellFont)<{ price: number }>`
  font-weight: 500;
  font-size: 1.5rem;

  color: ${(props) => {
    if (props.price > 0) return "#59FF48";
    else if (props.price < 0) return "#FF6848";
    else return "gray";
  }};
`;

export const tableColumns: any = [
  {
    title: "Subscribe",
    dataIndex: "image",
    key: "id",
    render: (imgUrl: string) => {
      return <ColumnFavorite imgUrl={imgUrl} />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "id",
    render: (name: string) => <CoinName>{name}</CoinName>,
    sorter: {
      compare: (a: Record<string, string>, b: Record<string, string>) =>
        a.name.localeCompare(b.name),
    },
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    key: "id",
    render: (symbol: string) => <BaseCellFont>{symbol}</BaseCellFont>,
  },
  {
    title: "Current Price",
    dataIndex: "current_price",
    key: "id",
    render: (currentPrice: string) => (
      <BaseCellFont>{currentPrice}</BaseCellFont>
    ),
    sorter: {
      compare: (a: Record<string, number>, b: Record<string, number>) =>
        a.current_price - b.current_price,
    },
  },
  {
    title: "Change 24h",
    dataIndex: "price_change_24h",
    key: "id",
    render: (price: number) => {
      return <PriceChange24h price={price}>{price}</PriceChange24h>;
    },
    sorter: {
      compare: (a: Record<string, number>, b: Record<string, number>) =>
        a.price_change_24h - b.price_change_24h,
    },
  },
  {
    title: "More Info",
    render: (text: string, record: Record<string, any>) => {
      return <OpenCoinInfo coinId={record.id} />;
    },
  },
];
