import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import styled from "styled-components";

import iconSrc from "../../../../assets/header/logout.png";

import { logout } from "../../../../utils/helperFunctions";

const Icon = styled.img`
  margin-left: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const IconLogout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <Icon
      onClick={() => {
        logout(dispatch, history);
      }}
      src={iconSrc}
      alt="logout"
    />
  );
};

export default IconLogout;
