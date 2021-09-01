import React from "react";
import styled from "styled-components";

const Button = ({ children, variant, ...otherProps }) => {
  console.log(variant);
  return (
    <ButtonUi variant={variant} {...otherProps}>
      {children}
    </ButtonUi>
  );
};

const defaultStyle = (theme) => `
border-radius: 20px;
border: none;
text-transform: uppercase;
  font-size: ${theme.sizes.font.small};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.2s ease;
  margin: 20px 0;
  letter-spacing: 0.12em;
  &:hover {
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.95);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
`;

const main = (theme) => `
  padding: 10px 40px;
  background-image: ${theme.colors.ui.primaryGradient};
  color: white;
`;

const border = (theme) => `
  min-width: 105px;
  height: 38px;
  color: ${theme.colors.font.primary};
  border: double 1px transparent;
  background-image: linear-gradient(#fff, #fff),
    ${theme.colors.ui.primaryGradient};
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

const variants = {
  border,
  main,
};

const ButtonUi = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, variant }) => variant && variants[variant](theme)};
`;

Button.defaultProps = {
  variant: "main",
};

export default Button;
