import React from "react";
import styled from "styled-components";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import LogoTitle from "./LogoTitle/LogoTitle";

const HeaderLogoSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderLogoSection: React.FC = () => {
  return (
    <HeaderLogoSectionContainer>
      <HeaderLogo />
      <LogoTitle />
    </HeaderLogoSectionContainer>
  );
};

export default HeaderLogoSection;
