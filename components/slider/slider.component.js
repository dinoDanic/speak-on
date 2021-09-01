import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <CaroWrap>
      <Carousel
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        width="100%"
      >
        <Slide key="slide1">
          <Sub>Opiniones de nuestros clientes</Sub>
          <Info>
            <Name>Juan Pablo Martínez</Name>
            <Message>
              “El servicio que contraté me es muy útil y el seguimiento al
              cliente es muy profesional, lo recomiendo ampliamente”
            </Message>
          </Info>
        </Slide>
        <Slide key="slide2">
          <Sub>Opiniones de nuestros clientes</Sub>
          <Info>
            <Name>Juan Pablo Martínez</Name>
            <Message>
              “El servicio que contraté me es muy útil y el seguimiento al
              cliente es muy profesional, lo recomiendo ampliamente”
            </Message>
          </Info>
        </Slide>
        <Slide key="slide3">
          <Sub>Opiniones de nuestros clientes</Sub>
          <Info>
            <Name>Juan Pablo Martínez</Name>
            <Message>
              “El servicio que contraté me es muy útil y el seguimiento al
              cliente es muy profesional, lo recomiendo ampliamente”
            </Message>
          </Info>
        </Slide>
      </Carousel>
    </CaroWrap>
  );
};

const CaroWrap = styled.div`
  width: 100%;
  button {
    &:hover {
      background-color: transparent;
    }
  }
`;

const Slide = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Sub = styled.div`
  color: white;
  font-size: ${(prosp) => prosp.theme.sizes.font.large};
  margin-bottom: 38px;
`;
const Name = styled.div`
  color: white;
  font-size: ${(prosp) => prosp.theme.sizes.font.mid};
  margin-bottom: 12px;
`;
const Message = styled.div`
  color: white;
  font-size: ${(prosp) => prosp.theme.sizes.font.normal};
  font-weight: lighter;
  font-style: italic;
  max-width: 400px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Slider;
