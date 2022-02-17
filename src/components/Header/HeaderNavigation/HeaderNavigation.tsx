import React from "react";
import styled from "styled-components";

import LogInButton from "../LogInButton/LogInButton";
import RegButton from "../RegButton/RegButton";

const HeaderNavigationContainer = styled.nav``;

const HeaderNavigation: React.FC = () => {
  return (
    <HeaderNavigationContainer>
      <LogInButton text="log in" />
      <RegButton text="sign up" />
    </HeaderNavigationContainer>
  );
};

export default HeaderNavigation;
