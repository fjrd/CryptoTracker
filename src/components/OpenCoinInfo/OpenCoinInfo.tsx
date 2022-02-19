import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import styled from "styled-components";
import { routes } from "../../constants/routes";
import { actionSaveCurrentCrypto } from "../../redux/actionCreators";

const BrowseCrypto = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 21px;

  color: #2929ff;
  &:hover {
    cursor: pointer;
  }
`;

const OpenCoinInfo: React.FC<{ coinId: string }> = ({ coinId }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  return (
    <BrowseCrypto
      onClick={() => {
        console.log(coinId);
        dispatch(actionSaveCurrentCrypto(coinId));
        history.push(`${url}/coins/${coinId}`);
      }}
    >
      Browse
    </BrowseCrypto>
  );
};

export default OpenCoinInfo;
