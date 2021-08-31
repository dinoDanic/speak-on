import React from "react";
import styled from "styled-components";

const Text = ({ children }) => {
  return <TextTypo>{children}</TextTypo>;
};

const TextTypo = styled.div`
  font-size: ${(props) => props.theme.sizes.font.normal};
  color: #000;
  font-weight: lighter;
`;

export default Text;
