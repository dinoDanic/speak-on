import React from "react";
import styled from "styled-components";

const HideDesktop = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    display: none;
  }
`;

export default HideDesktop;
