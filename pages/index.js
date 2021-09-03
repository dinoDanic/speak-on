import styled from "styled-components";
import { motion } from "framer-motion";

import Cats from "../components/cats/cats.component";
import Hero from "../components/hero/hero.component";
import ImageSeperator from "../components/image-seperator/image-seperator.component";
import Seperator from "../components/seperator/seperator.component";
import Suport from "../components/suport/suport.component";

export default function Home() {
  return (
    <HomeWrap
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Seperator />
      <Suport />
      <ImageSeperator image>
        <Title>How we can help</Title>
      </ImageSeperator>
      <Cats />
    </HomeWrap>
  );
}

const HomeWrap = styled(motion.div)``;

const Title = styled.div`
  font-size: ${(props) => props.theme.sizes.font.xLarge};
  color: white;
  font-weight: 100;
`;
