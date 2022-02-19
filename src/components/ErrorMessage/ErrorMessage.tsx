import React from 'react';
import styled from 'styled-components';

const Message = styled.span`
  color: red;
  font-family: 'Inter';
`;

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <Message>{message}</Message>;
};

export default ErrorMessage;
