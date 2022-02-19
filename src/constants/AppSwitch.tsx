import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import ChartPage from "../pages/ChartPage/ChartPage";

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

import { routes } from "./routes";

const AppSwitch: React.FC = () => {
  return (
    <Switch>
      <Route exact path={routes.main}>
        <MainPage />
      </Route>
      <Route path={routes.login}>
        <LoginForm />
      </Route>
      <Route path={routes.registration}>
        <RegistrationForm />
      </Route>
      <Route path={routes.chart}>
        <ChartPage />
      </Route>

      <PrivateRoute
        component={ChartPage}
        jwtToken=""
        currentUser={null}
        path={routes.chart}
      />
    </Switch>
  );
};

export default AppSwitch;
