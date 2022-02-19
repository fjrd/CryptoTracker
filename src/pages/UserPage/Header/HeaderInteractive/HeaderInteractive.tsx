import React from "react";
import styled from "styled-components";

import CurrentUser from "../CurrentUser/CurrentUser";
import Navigation from "../Navigation/Navigation";
import IconLogout from "../IconLogout/IconLogout";

const HeaderInteractiveContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderInteractive: React.FC = () => {
  return (
    <HeaderInteractiveContainer>
      <Navigation />
      <CurrentUser />
      <IconLogout />
    </HeaderInteractiveContainer>
  );
};

export default HeaderInteractive;
