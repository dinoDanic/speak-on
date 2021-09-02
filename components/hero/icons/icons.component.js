import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

import { icon1, icon2, icon3 } from "../../../styles/animations";

import telemarketingSvg from "../../../img/icons/mic.svg";
import ContactCenterSvg from "../../../img/icons/contactcenter.svg";
import AttenctionSvg from "../../../img/icons/attencion.svg";

const Icons = () => {
  return (
    <Container>
      <Icon
        variants={icon1}
        animate="animate"
        initial="initial"
        whileHover={{ scale: 1.05 }}
      >
        <Image src={telemarketingSvg} alt="icon" />
        <Text>telemarketing</Text>
      </Icon>
      <Icon
        variants={icon2}
        animate="animate"
        initial="initial"
        whileHover={{ scale: 1.05 }}
      >
        <Image src={ContactCenterSvg} alt="icon" />
        <Text>contact center</Text>
      </Icon>
      <Icon
        variants={icon3}
        animate="animate"
        initial="initial"
        whileHover={{ scale: 1.05 }}
      >
        <Image src={AttenctionSvg} alt="icon" />
        <Text>atencion a clientes</Text>
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  height: 100px;
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    height: fit-content;
  }
`;
const Icon = styled(motion.div)`
  position: absolute;
  width: 180px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-direction: column;
  flex: 1;
  img {
    width: 74px !important;
    color: red !important;
    height: 60px !important;
  }
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    position: inherit;
    transform: translate(0, 0) !important;
    min-width: 100%;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const Text = styled.div`
  margin-top: 20px;
  color: white;
  text-align: center;
  font-size: ${(props) => props.theme.sizes.font.small};
  font-weight: lighter;
  text-transform: uppercase;
`;

export default Icons;
