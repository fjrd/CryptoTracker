import React from "react";
import styled from "styled-components";

import logoSrc from "../../../../assets/header/diamond.png";

const LogoIcon = styled.img``;

const HeaderLogo = () => {
  return <LogoIcon src={logoSrc} alt="diamond" />;
};

export default HeaderLogo;
