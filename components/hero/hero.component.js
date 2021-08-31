import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BgImage from "../../img/home_bg.jpg";
import LogoImage from "../../img/logo-icon.png";

const Hero = () => {
  return (
    <Section>
      <Image
        src={BgImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="image"
      />
      <ImageContainer>
        <Image src={LogoImage} alt="logo" />
      </ImageContainer>
      <Container></Container>
    </Section>
  );
};
const Container = styled.div``;
const Section = styled.section`
  background-color: blue;
  height: 100vh;
  position: relative;
  overflow: hidden;
  pointer-events: none;
  @media (min-width: 1300px) {
    height: 90vh;
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  width: 1090px;
  right: -700px;
  bottom: -520px;
  pointer-events: none;
`;

export default Hero;
