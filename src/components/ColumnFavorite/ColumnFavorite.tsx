import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import NoActiveSrc from "../../assets/table/star-not-active.png";
import ActiveSrc from "../../assets/table/star-active.png";

import { routes } from "./../../constants/routes";

let starIconSrc = {
  src: NoActiveSrc,
};

const CoinIcon = styled.img`
  width: 40px;
`;

const FavoriteIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const ColumnFavoriteWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ColumnFavorite: React.FC<{ imgUrl: string }> = ({ imgUrl }) => {
  const history = useHistory();
  const [favorite, setFavorite] = useState(false);
  starIconSrc.src = favorite ? ActiveSrc : NoActiveSrc;
  return (
    <ColumnFavoriteWrapper>
      <FavoriteIcon
        onClick={() => {
          if (localStorage.getItem("userToken")) setFavorite(!favorite);
          else history.push(routes.login);
        }}
        src={starIconSrc.src}
        alt="favorite"
      />
      <CoinIcon src={imgUrl} alt="coin icon" />
    </ColumnFavoriteWrapper>
  );
};

export default ColumnFavorite;
