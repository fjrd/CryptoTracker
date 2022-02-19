import React from "react";
import styled, { keyframes } from "styled-components";

import { spinnerSmallSize } from "../../utils/markup/loadingSpinner";
import { maxWidth } from "./../../mediaQueries/mediaQueries";

const spinnerAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SpinnerWrapper = styled.div<{ smallSpinner?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 124px;
  display: inline-block;
  overflow: hidden;
  background: none;

  margin-top: 5px;

  ${(props) => spinnerSmallSize(props.smallSpinner as boolean)};

  ${maxWidth.tablet} {
    background-color: inherit;
  }
`;

const Spinner = styled.div<{ newColor?: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  & div {
    left: 60.14px;
    top: 29.759999999999998px;
    position: absolute;
    animation: ${spinnerAnimation} linear 1s infinite;
    background: #7db59a;
    width: 3.7199999999999998px;
    height: 14.879999999999999px;
    border-radius: 1.8599999999999999px / 7.4399999999999995px;
    transform-origin: 1.8599999999999999px 32.24px;
    box-sizing: content-box;

    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.9090909090909091s;
    }
    &:nth-child(2) {
      transform: rotate(32.72727272727273deg);
      animation-delay: -0.8181818181818182s;
    }
    &:nth-child(3) {
      transform: rotate(65.45454545454545deg);
      animation-delay: -0.7272727272727273s;
    }
    &:nth-child(4) {
      transform: rotate(98.18181818181819deg);
      animation-delay: -0.6363636363636364s;
    }
    &:nth-child(5) {
      transform: rotate(130.9090909090909deg);
      animation-delay: -0.5454545454545454s;
    }
    &:nth-child(6) {
      transform: rotate(163.63636363636363deg);
      animation-delay: -0.45454545454545453s;
    }
    &:nth-child(7) {
      transform: rotate(196.36363636363637deg);
      animation-delay: -0.36363636363636365s;
    }
    &:nth-child(8) {
      transform: rotate(229.0909090909091deg);
      animation-delay: -0.2727272727272727s;
    }
    &:nth-child(9) {
      transform: rotate(261.8181818181818deg);
      animation-delay: -0.18181818181818182s;
    }
    &:nth-child(10) {
      transform: rotate(294.54545454545456deg);
      animation-delay: -0.09090909090909091s;
    }
    &:nth-child(11) {
      transform: rotate(327.27272727272725deg);
      animation-delay: 0s;
    }
  }
`;

const SpinnerBar = styled.div``;

const createSpinnerBars = () => {
  const bars = 11;
  const spinnerBars = [];
  for (let i = 0; i < bars; i++) spinnerBars.push(<SpinnerBar key={i} />);

  return spinnerBars;
};

const LoadingSpinner: React.FC<{
  smallSpinner?: boolean;
  newColor?: string;
}> = ({ smallSpinner, newColor }) => {
  return (
    <SpinnerWrapper smallSpinner={smallSpinner}>
      <Spinner newColor={newColor}>
        {createSpinnerBars().map((bar) => bar)}
      </Spinner>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
