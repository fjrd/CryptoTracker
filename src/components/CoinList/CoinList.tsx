import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Table, Spin } from "antd";

import actionGetCoins from "../../redux/actions/actionGetCoins";
import { setPaginationStyles } from "../../constants/setPaginationStyles";

import { getCoinList } from "../../redux/selectors/selectors";

import { tableColumns } from "../../constants/tableColumns";
import BaseContainer from "../../containers/baseContainer";

import { LoadingOutlined } from "@ant-design/icons";

import {
  getGetDataErrorMessage,
  getGetDataErrorState,
  getGetDataLoadingState,
} from "../../redux/selectors/selectors";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Spinner = (
  <LoadingOutlined style={{ fontSize: 34, color: "#7db59a" }} spin />
);

const StyledTable = styled(Table)`
  width: 100%;

  align-self: center;

  margin-top: 50px;

  .ant-table-content {
    background-color: black;
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
  .ant-table-wrapper {
    width: 100%;
    margin-top: 270px;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    .ant-spin-nested-loading {
      width: 90%;
    }
  }
`;

const CoinList: React.FC = () => {
  const dispatch = useDispatch();
  const coinList = useSelector(getCoinList);

  const loading = useSelector(getGetDataLoadingState);
  const error = useSelector(getGetDataErrorState);
  const errorMessage = useSelector(getGetDataErrorMessage);

  let locale = {};

  if (error) {
    locale = {
      emptyText: <ErrorMessage message={errorMessage} />,
    };
  }

  console.log(coinList);

  useEffect(() => {
    dispatch(actionGetCoins());
  }, []);

  return (
    <TableWrapper>
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
