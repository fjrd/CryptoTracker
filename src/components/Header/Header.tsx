import React, { useEffect, useState } from "react";
import styled from "styled-components";

import HeaderLogoSection from "./HeaderLogoSection/HeaderLogoSection";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";

import BaseContainer from "../../containers/baseContainer";

import { headerOnScroll } from "../../utils/markup/headerMarkup";
import { scrollTopNoOffset, scrollTopOffset } from "../../constants/constants";

const HeaderElement = styled.header<{ isShrunk?: boolean }>`
  position: fixed;
  width: 100%;

  height: 78px;

  background-color: inherit;

  z-index: 100000;

  -ms-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  ${(props) => headerOnScroll(props.isShrunk as boolean)}
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  height: 100%;
`;

const Header = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > scrollTopOffset ||
            document.documentElement.scrollTop > scrollTopOffset)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < scrollTopNoOffset &&
          document.documentElement.scrollTop < scrollTopNoOffset
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderElement isShrunk={isShrunk}>
      <Container>
        <HeaderLogoSection />
        <HeaderNavigation />
      </Container>
    </HeaderElement>
  );
};

export default Header;
