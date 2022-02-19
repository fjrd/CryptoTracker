import { useHistory } from "react-router";
import styled from "styled-components";

import { routes } from "../../constants/routes";

import notFoundSrc from "../../assets/pages/not-found.png";

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background: url(${notFoundSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    cursor: pointer;
  }
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <NotFoundWrapper
      onClick={() => {
        history.push(routes.main);
      }}
    />
  );
};

export default NotFound;
