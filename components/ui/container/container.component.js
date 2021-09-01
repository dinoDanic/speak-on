import React from "react";
import styled from "styled-components";

const Container = ({ children, ...otherPorps }) => {
  return (
    <Wrap>
      <Middle {...otherPorps}>{children}</Middle>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Middle = styled.div`
  width: 45%;
  z-index: 30;
  @media (max-width: 1400px) {
    width: 60%;
  }
  /*   @media (max-width: 600px) {
    width: 70%;
  } */
`;

export default Container;
