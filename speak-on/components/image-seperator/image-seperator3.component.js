import React from "react";
import styled from "styled-components";

const ImageSeperator = ({ image, children }) => {
  return (
    <Container>
      <SvgTop>
        <svg
          width="100%"
          viewBox="0 0 3011 264"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H3011V264C3011 264 2366.98 176 1505.5 176C644.019 176 0 264 0 264V0Z"
            fill="white"
          />
        </svg>
      </SvgTop>
      <Content>{children}</Content>
      <SvgBottom>
        <svg
          width="100%"
          viewBox="0 0 3011 321"
          fill="none"
          clipPath=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 92.0137C1175.86 -30.4518 1835.14 -30.8905 3011 92.0137V321C3011 321 2366.98 321 1505.5 321C644.019 321 0 321 0 321L0 92.0137Z"
            fill="white"
          />
        </svg>
      </SvgBottom>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.ui.primaryGradient};
`;

const Content = styled.div``;

const SvgTop = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
`;
const SvgBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: center;
`;

const Shadow = styled.div`
  position: absolute;
  width: 60%;
  margin-top: -50px;
  height: 200px;
  pointer-events: none;
`;

export default ImageSeperator;
