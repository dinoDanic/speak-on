import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { motion } from "framer-motion";
import { solutionsAni, solutionsAniImage } from "../../styles/animations";

import BuildingImage from "../../img/home/buildings.jpg";
import BlurImage from "../../img/home/blur.png";

import Container from "../../components/ui/container/container.component";

const Heading = () => {
  return (
    <Wrap>
      <Container>
        <Text variants={solutionsAni} animate="animate" initial="initial">
          How can we help
        </Text>
      </Container>
      <ImageHold
        variants={solutionsAniImage}
        animate="animate"
        initial="initial"
      >
        <Image
          layout="fill"
          quality="100"
          objectFit="cover"
          src={BuildingImage}
          alt="building image"
        />
      </ImageHold>
      <Sep>
        <Shadow>
          <Image src={BlurImage} layout="fill" alt="shadow" />
        </Shadow>
      </Sep>
    </Wrap>
  );
};
const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 700px;
  overflow: hidden;
`;
const ImageHold = styled(motion.div)`
  margin-top: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Sep = styled.div`
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

const Text = styled(motion.div)`
  margin-top: -110px;
  z-index: 30;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.sizes.font.xLarge};
  color: white;
  font-weight: 100;
`;

export default Heading;
