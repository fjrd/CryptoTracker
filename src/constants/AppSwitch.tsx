import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MainPage from "../pages/MainPage/MainPage";
import LoginForm from "../components/LoginForm/LoginForm";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
<<<<<<< HEAD
import UserPage from "../pages/UserPage/UserPage";
=======

import UserPage from "../pages/UserPage/UserPage";

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

import { routes } from "./routes";
import NotFound from "../pages/NotFound/NotFound";

import { getCurrentUserData } from "../redux/selectors/selectors";

const AppSwitch: React.FC = () => {
  const userToken = localStorage.getItem("userToken");
  const currentUser = useSelector(getCurrentUserData);

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
<<<<<<< HEAD
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2

      <PrivateRoute
        component={UserPage}
        jwtToken={userToken}
        currentUser={currentUser}
        path={routes.profile}
<<<<<<< HEAD
=======

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
      />
    </Switch>
  );
};

export default AppSwitch;

/*

<Route path={routes.notFound} exact>
        <NotFound />
      </Route>

*/
