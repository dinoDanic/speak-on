import React from "react";
import styled from "styled-components";

export const Column = ({ children }) => {
  return <TheColumn>{children}</TheColumn>;
};

export const Row = ({ children }) => {
  return <TheRow>{children}</TheRow>;
};

const TheColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const TheRow = styled.div`
  display: flex;
  min-width: 200px;
  margin-bottom: 20px;
`;
