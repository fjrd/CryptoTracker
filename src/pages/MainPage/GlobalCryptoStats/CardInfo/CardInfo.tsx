import React from "react";
import styled from "styled-components";

const CardTitle = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 21px;

  color: #ffffff;
`;

const CardSubtitle = styled(CardTitle)`
  margin-top: 20px;
  font-size: 1.6rem;
  color: #f6764d;
`;

const Card = styled.div`
  width: 300px;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #1c1c1c;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 25px;

  margin-right: 40px;

  margin-bottom: 50px;
`;

const CardInfo: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </Card>
  );
};

export default CardInfo;
