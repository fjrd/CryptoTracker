import React from "react";
import { Route, Redirect } from "react-router-dom";
import swal from "sweetalert";
import { routes } from "../../constants/routes";

const PrivateRoute: React.FC<{
  component: React.FC<any>;
  jwtToken: string | null;
<<<<<<< HEAD
  currentUser: any;
=======

  currentUser: any;

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
  [x: string]: unknown;
}> = ({ component: Component, jwtToken, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
<<<<<<< HEAD
      console.log(`token and userData in private : ${currentUser} ${jwtToken}`);
=======

      console.log(`token and userData in private : ${currentUser} ${jwtToken}`);

>>>>>>> 1fa2e89d771cc802b3f4a86fd5b779c7e63dfad2
      if (!currentUser) {
        if (!jwtToken) {
          swal("Для доступа к странице нужно авторизоваться!");
          return (
            <Redirect
              to={{

                pathname: routes.main,

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
