import React from "react";
import styled from "styled-components";

import Header from "./Header/Header";
import UserPageSwitch from "./UserPageSwitch";

const UserPageWrapper = styled.div`
  height: 100%;
  min-height: 110vh;
  width: 100%;
  background-color: black;
`;

const SwitchContainer = styled.div`
  width: 100%;

  background-color: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserPage: React.FC = () => {
  return (
    <UserPageWrapper>
      <Header />
      <SwitchContainer>
        <UserPageSwitch />
      </SwitchContainer>
    </UserPageWrapper>
  );
};

export default UserPage;
