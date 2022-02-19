import React from "react";
import styled from "styled-components";

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 21px;

  margin-left: 10px;

  text-transform: capitalize;

  color: #ffffff;
`;

const LogoTitle = () => {
  return <Title>Crypto project</Title>;
};

export default LogoTitle;
