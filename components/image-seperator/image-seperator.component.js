import React from "react";
import styled from "styled-components";

import Container from "../ui/container/container.component";

const ImageSeperator = ({ image, children }) => {
  return (
    <Wrap>
      <Container>
        <Content>{children}</Content>
      </Container>
      <Sep>
        {image && (
          <img
            src="/img/home/buildings.jpg"
            alt="building image"
            width="100%"
            height="100%"
          />
        )}
      </Sep>
      <Sep2>
        <Shadow>
          <img src="/img/home/blur.png" width="100%" alt="shadow" />
        </Shadow>
      </Sep2>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 500px;
  overflow: hidden;
`;

const Content = styled.div`
  margin-top: -110px;
  z-index: 30;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Sep = styled.div`
  overflow: hidden;
  width: 120%;
  position: absolute;
  top: 0;
  height: 100%;
  background: ${(props) => props.theme.colors.ui.primaryGradient};
  border-top-left-radius: 2000px 300px;
  border-top-right-radius: 2000px 300px;
  img {
    object-fit: cover;
    width: 100%;
  }
`;
const Sep2 = styled.div`
  width: 120%;
  position: absolute;
  display: flex;
  justify-content: center;
  height: 170px;
  bottom: 0px;
  background-color: #ffffff;
  overflow: hidden;
  border-top-left-radius: 2000px 300px;
  border-top-right-radius: 2000px 300px;
`;

const Shadow = styled.div`
  position: absolute;
  width: 60%;
  margin-top: -100px;
  height: 200px;
  pointer-events: none;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    width: 100%;
  }
`;

export default ImageSeperator;
