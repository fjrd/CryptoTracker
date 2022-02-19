import React, { useState } from "react";
import styled from "styled-components";

import NoActiveSrc from "../../assets/table/star-not-active.png";
import ActiveSrc from "../../assets/table/star-active.png";

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
  const [favorite, setFavorite] = useState(false);
  starIconSrc.src = favorite ? ActiveSrc : NoActiveSrc;
  return (
    <ColumnFavoriteWrapper>
      <FavoriteIcon
        onClick={() => {
          setFavorite(!favorite);
        }}
        src={starIconSrc.src}
        alt="favorite"
      />
      <CoinIcon src={imgUrl} alt="coin icon" />
    </ColumnFavoriteWrapper>
  );
};

export default ColumnFavorite;
