import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Table, Spin } from "antd";

import actionGetCoins from "../../redux/actions/actionGetCoins";
import actionGetSearchCoins from "../../redux/actions/actionGetSearchCoins";

import { setPaginationStyles } from "../../constants/setPaginationStyles";

import {
  getCoinList,
  getSearchCoinList,
} from "../../redux/selectors/selectors";

import { tableColumns } from "../../constants/tableColumns";
import BaseContainer from "../../containers/baseContainer";

import { LoadingOutlined } from "@ant-design/icons";

import {
  getGetDataErrorMessage,
  getGetDataErrorState,
  getGetDataLoadingState,
} from "../../redux/selectors/selectors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchPanel from "../SearchPanel/SearchPanel";

const Spinner = (
  <LoadingOutlined style={{ fontSize: 34, color: "#7db59a" }} spin />
);

const StyledTable = styled(Table)`
  width: 100%;

  margin-top: 30px;

  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  .ant-pagination-item-ellipsis {
    background: white;
  }

  .ant-spin-nested-loading {
    width: 90%;
  }

  .ant-tooltip-open {
    color: white;
  }

  .ant-table-content {
    background-color: black;
  }

  .ant-table-column-sort {
    background-color: inherit;
  }
  .ant-table-cell {
    border-bottom: 1px solid darkgray;
  }

  .ant-table-cell-row-hover {
    background-color: #252525 !important;
  }

  .ant-table-thead {
    background: black !important;
  }

  .ant-table-column-sorters {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    .ant-table-column-sorter-inner {
      width: 7px;
    }
  }

  .ant-table-column-title,
  .ant-table-thead th {
    margin-right: 16px;
    font-weight: 500;
    font-size: 1.5rem;
  }

  ${setPaginationStyles()};
`;

const TableWrapper = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 250px;
`;

const CoinList: React.FC = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(getCoinList);
  const searchCoinList = useSelector(getSearchCoinList);

  const loading = useSelector(getGetDataLoadingState);
  const error = useSelector(getGetDataErrorState);
  const errorMessage = useSelector(getGetDataErrorMessage);

  let locale = {};

  if (error) {
    locale = {
      emptyText: <ErrorMessage message={errorMessage} />,
    };
  }

  useEffect(() => {
    dispatch(actionGetCoins());
  }, []);

  return (
    <TableWrapper>
      <SearchPanel
        onChange={(e: Record<string, any>) => {
          console.log(e.target.value);

          dispatch(actionGetSearchCoins(e.target.value));
          console.log(`searchCoinList:${searchCoinList}`);
        }}
      />
      <StyledTable
        dataSource={coinList}
        columns={tableColumns}
        rowKey="id"
        locale={locale}
        loading={{
          indicator: <Spin indicator={Spinner} />,
          spinning: loading,
        }}
      />
    </TableWrapper>
  );
};

export default CoinList;
