import React from "react";
import styled from "styled-components";

import { Redirect, useLocation } from "react-router";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import CompanyAboutShort from "./CompanyAboutShort/CompanyAboutShort";
import GlobalCryptoStats from "./GlobalCryptoStats/GlobalCryptoStats";

import CoinList from "../../components/CoinList/CoinList";

import { getCurrentUserData } from "../../redux/selectors/selectors";
import { routes } from "../../constants/routes";

const MainPageContainer = styled.div`
  background-color: #000000;
`;

const MainPage: React.FC = () => {
  const location: Record<string, any> = useLocation();
<<<<<<< HEAD

  const currentUser = useSelector(getCurrentUserData);

=======
  // const history = useHistory();
  const currentUser = useSelector(getCurrentUserData);

  console.log(localStorage.getItem("userToken"));
  console.log(currentUser);

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
  if (localStorage.getItem("userToken") || currentUser) {
    if (location.state?.backpath)
      return <Redirect to={location.state.backpath} />;

    return <Redirect to={routes.profile} />;
  }

  return (
    <MainPageContainer>
      <Header />
      <CompanyAboutShort />
      <GlobalCryptoStats />
      <CoinList />
    </MainPageContainer>
  );
};

export default MainPage;
