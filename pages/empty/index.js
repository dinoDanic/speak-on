import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import Container from "../../components/ui/container/container.component";

import HeroOtherPages from "../../components/hero/hero-other-pages.component";
import BackgroundHolder from "../../components/background-holder/background-holder.component";
import Metatags from "../../components/Metatags";

const Soluciones = () => {
  return (
    <>
      <Metatags title="" description="" />
      <SolucionesWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <BackgroundHolder />
        <HeroOtherPages>Empty</HeroOtherPages>
        <Container>Content goes here</Container>
      </SolucionesWrap>
    </>
  );
};

const SolucionesWrap = styled(motion.div)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default Soluciones;
