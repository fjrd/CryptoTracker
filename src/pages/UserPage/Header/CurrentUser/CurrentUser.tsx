import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { useDispatch } from "react-redux";

// import actionGetUserData from "../../../redux/actions/actionGetUserData";

import {
  getUserName,
  getUserId,
  getAuthLoadingState,
  getAuthErrorMessage,
  getAuthErrorState,
} from "../../../../redux/selectors/selectors";

import IconUserAvatar from "./InconUserAvatar";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import ErrorMessage from "../../ErrorMessage/ErrorMessage";

const CurrentUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 60px;
`;

const UserName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;

  margin-left: 20px;

  text-transform: capitalize;

  color: #e7e7e7;
`;

// ${hideElementOnTablet()};

const CurrentUser: React.FC = () => {
  const dispatch = useDispatch();
  const userId = useSelector(getUserId);
  const loading = useSelector(getAuthLoadingState);
  // const errorMessage = useSelector(getAuthErrorMessage);
  // const error = useSelector(getAuthErrorState);
  const userName = useSelector(getUserName);

  useEffect(() => {
    // dispatch(actionGetUserData(userId));
  }, []);

  if (loading) {
    return (
      <CurrentUserContainer>
        <LoadingSpinner smallSpinner newColor="white" />
      </CurrentUserContainer>
    );
  }

  /*if (error) {
    return (
      <CurrentUserContainer>
        <ErrorMessage message={errorMessage} />
      </CurrentUserContainer>
    );
  }*/

  return (
    <CurrentUserContainer>
      <IconUserAvatar />
      <UserName>{userName}</UserName>
    </CurrentUserContainer>
  );
};

export default CurrentUser;
