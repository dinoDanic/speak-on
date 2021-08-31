import React from "react";
import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
  return <ButtonUi {...otherProps}>{children}</ButtonUi>;
};

const ButtonUi = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizes.font.small};
  background: linear-gradient(90deg, #65c1c2 -7.48%, #1e4e9d 173.45%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  cursor: pointer;
  transition: 0.2s ease;
  margin: 20px 0;
  &:hover {
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

export default Button;
