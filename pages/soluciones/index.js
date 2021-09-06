import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import BigCat from "../../components/big-cat/big-cat.component";
import Container from "../../components/ui/container/container.component";

import { catsData } from "../../components/cats/cats.data";
import HeroOtherPages from "../../components/hero/hero-other-pages.component";
import BackgroundHolder from "../../components/background-holder/background-holder.component";
import Metatags from "../../components/Metatags";

const Soluciones = () => {
  return (
    <>
      <Metatags title="Soluciones" description="How we can help" />
      <SolucionesWrap
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <HeroOtherPages>How we can help</HeroOtherPages>
        <BackgroundHolder />
        <Container>
          <BigCats>
            {catsData?.map((data) => (
              <BigCat normal data={data} key={data.id} />
            ))}
          </BigCats>
        </Container>
      </SolucionesWrap>
    </>
  );
};

const BgHolder = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
const SolucionesWrap = styled(motion.div)`
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const BigCats = styled.div`
  @media (max-width: ${(props) => props.theme.screen.mobile}) {
    margin-top: -100px;
  }
`;

export default Soluciones;
