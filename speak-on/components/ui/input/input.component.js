import React from "react";
import styled from "styled-components";

const Input = ({ ...otherProps }) => {
  return <TheInput {...otherProps} />;
};

const TheInput = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px 15px;
  background: ${(props) => props.theme.colors.ui.primaryGradient};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  color: white;
  transition: 0.2s ease;
  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-style: italic;
    font-weight: lighter;
  }
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
  }
`;

export default Input;
