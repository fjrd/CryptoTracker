import React from "react";
import { Route, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { routes } from "../../constants/routes";

const PrivateRoute: React.FC<{
  component: React.FC<any>;
  jwtToken: string | null;
  currentUser: any;
  [x: string]: unknown;
}> = ({ component: Component, jwtToken, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(`token and userData in private : ${currentUser} ${jwtToken}`);
      if (!currentUser) {
        if (!jwtToken) {
          swal("Для доступа к странице нужно авторизоваться!");
          return (
            <Redirect
              to={{
                pathname: routes.login,
                state: { backpath: props.history.location.pathname },
              }}
            />
          );
        }
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
