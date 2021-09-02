import React from "react";
import styled from "styled-components";
import Image from "next/image";

import LogoPng from "../../img/logo.svg";
import BigLogoSvg from "../../img/logo-icon.svg";

import ImageSeperator from "../image-seperator/image-seperator.component";
import Slider from "../slider/slider.component";
import Contact from "../contact/contact.component";
import Map from "../map/map.component";

const Footer = () => {
  return (
    <>
      <ImageSeperator>
        <Slider />
      </ImageSeperator>
      <Contact />
      <Map />
      <Credits>
        <Top>
          <Logo>
            <Image src={LogoPng} alt="speak on logo image" />
          </Logo>
        </Top>
        <Middle>AVISO DE PRIVACIDAD</Middle>
        <Bottom>
          © Speak On. Reservados todos los derechos.
          <br /> <br />
          Sitio diseñado por Epic Brand 2021
        </Bottom>
        <BigLogo>
          <Image src={BigLogoSvg} alt="speak on logo image" />
        </BigLogo>
      </Credits>
    </>
  );
};

const Credits = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;
const Logo = styled.div`
  min-width: 196px;
  max-width: 196px;
  height: 62px;
`;
const Top = styled.div`
  z-index: 20;
`;
const Middle = styled.div`
  color: white;
  font-size: ${(props) => props.theme.sizes.font.small};
  font-weight: lighter;
  z-index: 20;
`;
const Bottom = styled.div`
  color: white;
  font-size: ${(props) => props.theme.sizes.font.xSmall};
  text-align: center;
  font-weight: lighter;
  z-index: 20;
`;
const BigLogo = styled.div`
  width: 774px;
  height: 743px;
  position: absolute;
  right: -500px;
  top: 60px;
  z-index: 10;
`;

export default Footer;
