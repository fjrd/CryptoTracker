import React from "react";
import styled from "styled-components";

import InputField from "../InputField/InputField";

import IconSearch from "./IconSearch";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 885px;
`;

const SearchPanel: React.FC<{
  onChange: (e: Record<string, any>) => void;
}> = ({ onChange }) => {
  return (
    <Container>
      <InputField
        placeholder="Search"
        suffix={<IconSearch />}
        paddingLeft="26px"
        paddingRight="4px"
        onChange={onChange}
      />
    </Container>
  );
};

export default SearchPanel;
