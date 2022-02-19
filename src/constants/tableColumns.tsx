import styled from "styled-components";

import { fixLongPrice } from "../utils/helperFunctions";

import NoActiveSrc from "../assets/table/star-not-active.png";
import ActiveSrc from "../assets/table/star-active.png";

import ColumnFavorite from "../components/ColumnFavorite/ColumnFavorite";

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

export const tableColumns = [
  {
    title: "",
    dataIndex: "image",
    key: "id",
    render: (imgUrl: string, record: any, index: any) => {
      console.log(imgUrl, record, index);
      return <ColumnFavorite imgUrl={imgUrl} />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "id",
    render: (name: string) => <CoinName>{name}</CoinName>,
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
  },
  {
    title: "Change 24h",
    dataIndex: "price_change_24h",
    key: "id",
    render: (price: number) => {
      return (
        <PriceChange24h price={price}>{fixLongPrice(price)}</PriceChange24h>
      );
    },
  },
];
