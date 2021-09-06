import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import Container from "../../components/ui/container/container.component";

import HeroOtherPages from "../../components/hero/hero-other-pages.component";
import Metatags from "../../components/Metatags";
import Title from "../../components/ui/typo/title.typo";
import Text from "../../components/ui/typo/text.type";

const Lorem = () => {
  return (
    <>
      <Metatags title="" description="" />
      <LoremWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <HeroOtherPages>Lorem Ipsum</HeroOtherPages>
        <Container>
          <Title>Lorem Ipsum</Title>
          <br />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            alias molestias possimus quidem, nam ullam rem exercitationem
            obcaecati blanditiis quam, iste hic labore, praesentium eum earum
            mollitia aperiam incidunt in.
          </Text>
        </Container>
      </LoremWrap>
    </>
  );
};

const LoremWrap = styled(motion.div)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default Lorem;
