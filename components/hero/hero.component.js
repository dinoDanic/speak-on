import React from "react";
import styled from "styled-components";
import Image from "next/image";

import BgImage from "../../img/home_bg.jpg";
import LogoImage from "../../img/logo-icon.svg";
import { motion } from "framer-motion";

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
      <ImageContainer
        initial={{ rotate: -30 }}
        animate={{
          rotate: 360,
          transition: { duration: 180, ease: "linear", repeat: Infinity },
        }}
      >
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
const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 890px;
  right: -530px;
  bottom: -520px;
  pointer-events: none;
`;

export default Hero;
