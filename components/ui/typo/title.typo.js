import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleTypo>{children}</TitleTypo>;
};

const TitleTypo = styled.div`
  font-size: ${(props) => props.theme.sizes.font.large};
  color: ${(props) => props.theme.colors.font.primary};
`;

export default Title;
