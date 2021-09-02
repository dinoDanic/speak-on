import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import BgImage from "../../img/main_bg.png";
import LogoImage from "../../img/logo-icon.svg";
import LogoPng from "../../img/logo.svg";

import Icons from "./icons/icons.component";
import Button from "../../components/ui/button/button.component";

import { logoAni, buttonAni } from "../../pages/animations";

const Hero = () => {
  return (
    <Section>
      <Image
        src={BgImage}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality="100"
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

      <Wrap>
        <Logo variants={logoAni} animate="animate" initial="initial">
          <Image src={LogoPng} alt="speak on logo image" />
        </Logo>
        <Icons />
        <ButtonHolder variants={buttonAni} animate="animate" initial="initial">
          <Button variant="borderBlue">MÁS SERVICIOS</Button>
        </ButtonHolder>
      </Wrap>
    </Section>
  );
};
const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    pointer-events: none;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
  width: 80%;
  z-index: 100;
  @media (max-width: 700px) {
    height: 90%;
  }
`;
const Logo = styled(motion.div)``;
const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 890px;
  right: -530px;
  bottom: -520px;
  pointer-events: none;
`;

const ButtonHolder = styled(motion.div)``;

export default Hero;
