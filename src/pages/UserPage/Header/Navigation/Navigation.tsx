import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import styled, { css } from "styled-components";

import { routes } from "../../../../constants/routes";

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  list-style: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 21px;

  color: #e7e7e7;
`;

const Link = styled.li`
  margin-right: 15px;
  text-transform: uppercase;

  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    color: #ff602b;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const Navigation: React.FC = () => {
  const history = useHistory();
  const { url } = useRouteMatch();

  const [openWatchList, setOpenWatchList] = useState(false);

  const linkText = openWatchList ? "available Coins" : "Watch list";

  return (
    <NavigationWrapper>
      <LinkList>
        <Link
          onClick={() => {
            if (!openWatchList) history.push(`${url}${routes.watchlist}`);
            else history.push(routes.profile);

            setOpenWatchList(!openWatchList);
          }}
        >
          {linkText}
        </Link>
      </LinkList>
    </NavigationWrapper>
  );
};

export default Navigation;
