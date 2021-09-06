import React from "react";
import styled from "styled-components";

const TextArea = ({ ...otherProps }) => {
  return <Field {...otherProps} />;
};

const Field = styled.textarea`
  width: 100%;
  border-radius: 20px;
  padding: 15px;
  background: ${(props) => props.theme.colors.ui.primaryGradient};
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-height: 120px;
  outline: none;
  min-width: 100px;
  max-height: 300px;

  color: white;
  transition: 0.2s ease;
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
  }
`;

export default TextArea;
