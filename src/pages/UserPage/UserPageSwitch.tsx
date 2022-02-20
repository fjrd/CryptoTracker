import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ChartPage from "../ChartPage/ChartPage";
import CoinList from "../../components/CoinList/CoinList";
import UserPage from "./UserPage";
<<<<<<< HEAD
import CoinDetails from "../CoinDetails/CoinDetails";
=======
>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

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
<<<<<<< HEAD

      <Route path={`${url}${routes.coinInfo}`}>
        <CoinDetails />
      </Route>
=======
>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
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
