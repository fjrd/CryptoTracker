import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ChartPage from "../ChartPage/ChartPage";
import CoinList from "../../components/CoinList/CoinList";
import UserPage from "./UserPage";
import CoinDetails from "../CoinDetails/CoinDetails";

import { routes } from "../../constants/routes";

const UserPageSwitch: React.FC = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={routes.profile}>
        <CoinList />
      </Route>
      <Route path={`${url}${routes.chart}`}>
        <ChartPage />
      </Route>

      <Route path={`${url}${routes.coinInfo}`}>
        <CoinDetails />
      </Route>
      <Route path={`${url}${routes.watchlist}`}>
        <h1
          style={{
            color: "red",
            fontFamily: "Roboto",
            fontSize: "40px",
            marginTop: "200px",
          }}
        >
          watchlist
        </h1>
      </Route>
    </Switch>
  );
};

export default UserPageSwitch;

/* <PrivateRoute
        component={UserPage}
        jwtToken=""
        currentUser={null}
        path={routes.profile}
      />

*/
