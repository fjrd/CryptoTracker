import React from "react";
import styled from "styled-components";

import iconSearch from "../../assets/table/search.svg";

const Icon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

const IconSearch: React.FC = () => {
  return <Icon src={iconSearch} alt="bell" />;
};

export default IconSearch;
